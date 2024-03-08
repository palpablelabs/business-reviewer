import jwt from "jsonwebtoken";
import { headers } from "next/headers";

export async function POST(request: Request) {
  try {
    const headersList = headers();
    const authorization = headersList.get("authorization");
    if (!authorization) {
      return Response.json({ data: "Unauthorised" }, { status: 401 });
    }
    const decoded = jwt.verify(
      authorization.slice(7),
      process.env.JWT_SECRET as string
    );
    console.log("route api/auth/access decoded::", decoded);
  } catch (e) {
    return Response.json({ data: "Unauthorised" }, { status: 401 });
  }
  return Response.json({ data: "Authorised" }, { status: 200 });
}
