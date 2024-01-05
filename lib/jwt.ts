import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1h",
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key!, options);
  return token;
}

export function verifyJwt(token: string) {
  try {
    const secret_key = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secret_key!);
    return decoded as JwtPayload;
  } catch (error) {
    console.log(error);
    return null;
  }
}

interface RefreshTokenPayload extends JwtPayload {
  // Add any additional fields you need in the refresh token payload
}

export function signJwtRefreshToken(
  payload: RefreshTokenPayload,
  options: SignOption = {
    expiresIn: "7d", // Set the expiration time for the refresh token
  }
) {
  const secret_key = process.env.REFRESH_SECRET_KEY; // Use a separate secret key for refresh tokens
  const token = jwt.sign(payload, secret_key!, options);
  return token;
}

export function verifyJwtRefreshToken(token: string) {
  try {
    const secret_key = process.env.REFRESH_SECRET_KEY;
    const decoded = jwt.verify(token, secret_key!) as RefreshTokenPayload;
    return decoded;
  } catch (error) {
    console.log(error);
    return null;
  }
}
