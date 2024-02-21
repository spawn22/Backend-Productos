import { Schema, Types, model, Model } from "mongoose";
import { IProducto } from "../interfaces/producto.interface";

const ProductoSchema = new Schema<IProducto>(
  {
    nombreProducto: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    cantidadPorBulto: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductoModel = model("productos", ProductoSchema);

export default ProductoModel;
