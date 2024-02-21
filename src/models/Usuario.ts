import { Schema, Types, model, Model } from "mongoose";
import { IUsuario } from "../interfaces/usuario.interface";

const UsuarioSchema = new Schema<IUsuario>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    rol: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UsuarioModel = model("usuarios", UsuarioSchema);

export default UsuarioModel;
