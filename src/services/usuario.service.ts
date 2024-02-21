import UsuarioModel from "../models/Usuario";
import { IUsuario } from "../interfaces/usuario.interface";
import { verifyPass } from "../utils/bcrypt.handle";
import { signToken } from "../utils/jwt.handle";

export const registroUsuario = async (usuario: IUsuario) => {
  const usuarioExistente = await UsuarioModel.findOne({ email: usuario.email });

  if (usuarioExistente) return "Usuario ya existe";

  const responseUsuario = await UsuarioModel.create(usuario);

  return responseUsuario;
};

export const loginUsuario = async (usuario: IUsuario) => {
  const responseUsuario = await UsuarioModel.findOne({
    email: usuario.email,
  });

  if (!responseUsuario) return "Usuario no existe, Porfavor Registrarse";

  const passwordCompare = await verifyPass(
    usuario.password,
    responseUsuario.password
  );

  if (!passwordCompare) return "Contraseña incorrecta";

  const token = signToken(responseUsuario.rol as string, responseUsuario.email );

  const data = {
    token,
    usuario: responseUsuario,
  };
  return data;
};
