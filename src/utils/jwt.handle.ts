import { sign, verify } from "jsonwebtoken";

const JWT_SECRET: any = process.env.JWT_SECRET;

const signToken = (rol: string, email: string) => {
  const jwt = sign({ rol, email }, JWT_SECRET, {
    expiresIn: "1H",
  });
  return jwt;
};

const verifyToken = async (jwt: string) => {
  const validUser = verify(jwt, JWT_SECRET);
  return validUser;
};

export { signToken, verifyToken };
