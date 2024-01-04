import { verifyJwt } from "@/lib/jwt";
import MongoDBConnect from "@/lib/mongodb";
import User from "@/models/user";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // 추가된 부분
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    });
  }

  console.log(params);
  await MongoDBConnect();
  const user = await User.findOne({
    _id: params.id,
  });

  return new Response(JSON.stringify(user));
}
