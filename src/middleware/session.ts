import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

const checkSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(" ")[1] || null;
    const isOk = await verifyToken(`${jwt}`);
    const decodedToken = isOk as JwtPayload; // Realizar una aserción de tipo
    console.log(decodedToken.rol);

    if (decodedToken.rol === "user") {
      res
        .status(403)
        .send("No tienes permiso para acceder a esta funcionalidad");
    } else if (decodedToken.rol === "admin") {
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("SESION_NO_VALIDADA");
  }
};

export { checkSession };
