import express from "express";
import { getUsers } from "../controllers/users.js";
import { postUsers } from "../controllers/addUsers.js";
import { editUsers } from "../controllers/editUsers.js";
import { deleteUsers } from "../controllers/deleteUsers.js";

const router = express.Router();

router.get("/user", getUsers);
router.post("/add_user", postUsers);
router.put("/edit_user", editUsers);
router.post("/delete_user", deleteUsers);

export default router;
