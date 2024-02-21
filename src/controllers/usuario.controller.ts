import { loginUsuario, registroUsuario } from "../services/usuario.service";
import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { encrypt } from "../utils/bcrypt.handle";

const register = async (req: Request, res: Response) => {
  try {
    const { email, password, rol } = req.body;
    const hashedPassword = await encrypt(password);
    const response = await registroUsuario({
      email,
      password: hashedPassword,
      rol,
    });
    if (response === "Usuario ya existe") {
      res.status(400);
    }
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_REGISTER_USER", error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password} = req.body;

    const response = await loginUsuario({ email, password });

    if (response === "Usuario no existe, Porfavor Registrarse") {
      res.status(400);
    } else if (response === "Contraseña incorrecta") {
      res.status(400);
    }

    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_LOGIN_USER", error);
  }
};

export { register, login };
