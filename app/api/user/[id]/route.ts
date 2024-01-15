import {
  verifyJwt,
  verifyJwtRefreshToken,
  signJwtAccessToken,
} from "@/lib/jwt";
import MongoDBConnect from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const accessToken = request.headers.get("authorization");

  if (!accessToken || !verifyJwt(accessToken)) {
    const refreshToken = request.headers.get("refresh-token");

    if (!refreshToken || !verifyJwtRefreshToken(refreshToken)) {
      return NextResponse.json({ error: "No Authorization" }, { status: 401 });
    }

    const refreshPayload = verifyJwtRefreshToken(refreshToken);
    const newAccessToken = signJwtAccessToken({ sub: refreshPayload?.sub });

    return NextResponse.json(
      { error: "Token expired", newAccessToken },
      { status: 401 }
    );
  }

  console.log(params);
  await MongoDBConnect();
  const user = await User.findOne({
    _id: params.id,
  });

  const { _id, name } = user;

  return NextResponse.json({
    message: "get User Information OK",
    data: { name, _id },
  });
}
