import { hash, compare } from "bcrypt";

const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 10);
  return passwordHash;
};

const verifyPass = async (pass: string, passwordHash: string) => {
  const comparePassword = await compare(pass, passwordHash);
  return comparePassword;
};

export { encrypt, verifyPass };
