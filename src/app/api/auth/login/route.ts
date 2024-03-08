import { OAuth2Client } from "google-auth-library";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

export async function POST(request: Request) {
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
      const { email, name } = payload;
      const authToken = jwt.sign(
        { email, name },
        process.env.JWT_SECRET as string
      );
      return Response.json({ authToken }, { status: 200 });
    }
  }
  return Response.json({ data: "Unauthorised" }, { status: 401 });
}
