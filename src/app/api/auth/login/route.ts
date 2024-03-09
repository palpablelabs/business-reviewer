import { OAuth2Client } from "google-auth-library";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

import { connectDatabase, insertDocument } from "@/app/util/mongoDB";
import { UserRoles } from "@/app/util/role";

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

export async function POST(request: Request) {
  try {
    const headersList = headers();
    const authorization = headersList.get("authorization");
    if (authorization) {
      const ticket = await client.verifyIdToken({
        idToken: authorization.slice(7),
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      if (payload) {
        if (payload.aud != process.env.GOOGLE_CLIENT_ID) {
          return Response.json({ data: "Unauthorised" }, { status: 401 });
        }
        const { email, name, picture } = payload;
        const authToken = jwt.sign(
          { email, name },
          process.env.JWT_SECRET as string
        );

        await connectDatabase();
        const result = await insertDocument(
          process.env.MONGODB_USER_COLLECTION_NAME!,
          {
            email,
            name,
            picture,
            role: UserRoles.BUSINESS_USER,
          } as any
        );

        if (result.acknowledged) {
          return Response.json({ authToken }, { status: 200 });
        } else {
          return Response.json({ data: "Unauthorised" }, { status: 401 });
        }
      }
    }
    return Response.json({ data: "Unauthorised" }, { status: 401 });
  } catch (error) {
    console.error("error ::", error);
    return Response.json({ data: "Unauthorised" }, { status: 401 });
  }
}
