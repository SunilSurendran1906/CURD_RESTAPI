import express from "express";
import {
  fetch,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const route = express.Router();

route.post("/create", createUser);
route.get("/getallUsers", fetch);
route.put("/update/:id", updateUser);
route.delete("/delete/:id", deleteUser);

export default route;
