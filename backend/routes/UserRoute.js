// Menghandle semua route
import express from "express";
import {getUserById, getUsers} from "../controllers/userController.js";
const router = express.Router();

router.get('/users', getUsers)
router.get('/users/:id', getUserById)

export default router;