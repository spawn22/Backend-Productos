import { Router } from "express";
import {
  deleteProducto,
  getAllProductos,
  getProducto,
  postProducto,
  updateProducto,
} from "../controllers/producto.controller";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", getAllProductos);
router.get("/:id", getProducto);
router.post("/", checkSession, postProducto);
router.put("/:id", checkSession, updateProducto);
router.delete("/:id", checkSession, deleteProducto);

export { router };
