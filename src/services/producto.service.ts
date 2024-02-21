import { IProducto } from "../interfaces/producto.interface";
import ProductoModel from "../models/Producto";

const insertProducto = async (producto: IProducto) => {
  console.log("producto:", producto);
  const responseInsert = await ProductoModel.create(producto);

  return responseInsert;
};

const getProductobyId = async (id: string) => {
  const responseGet = await ProductoModel.findOne({ _id: id });

  return responseGet;
};

const getProductos = async () => {
  const responseGet = await ProductoModel.find({});

  return responseGet;
};

const updateProductoById = async (id: string, data: IProducto) => {
  const responseUpdate = await ProductoModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );

  return responseUpdate;
};

const deleteProductoById = async (id: string) => {
  const responseDelete = await ProductoModel.findOneAndDelete({ _id: id });

  return responseDelete;
};

export {
  insertProducto,
  getProductos,
  getProductobyId,
  updateProductoById,
  deleteProductoById,
};
