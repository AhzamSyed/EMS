import express from "express";
import { getAll, createOne } from "../controllers/employee.controller.js";

const router = express.Router();

router.route("/").get(getAll).post(createOne);
// router.route("/:id").put(updateOne).delete(deleteOne);

export default router;
