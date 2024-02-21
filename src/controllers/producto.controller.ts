import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  getProductos,
  insertProducto,
  getProductobyId,
  deleteProductoById,
  updateProductoById,
} from "../services/producto.service";

const getProducto = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getProductobyId(id);
    const data = response ? response : "NOT_FOUND";
    res.status(200).send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_PRODUCTO");
  }
};

const getAllProductos = async (req: Request, res: Response) => {
  try {
    const response = await getProductos();
    res.status(200).send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_PRODUCTOS", error);
  }
};

const postProducto = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertProducto(body);

    res.status(200).send(response);
  } catch (error) {
    handleHttp(res, "ERROR_POST_PRODUCTOS", error);
  }
};

const updateProducto = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateProductoById(id, body);
    res.status(200).send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_PRODUCTOS");
  }
};

const deleteProducto = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteProductoById(id);
    res.status(200).send(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_PRODUCTOS");
  }
};

export {
  getProducto,
  getAllProductos,
  postProducto,
  updateProducto,
  deleteProducto,
};
