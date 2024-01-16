import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
// Menambahkan middleware
app.use(cors());
app.use(UserRoute);
// Supaya bisa menerima request dalam format JSON
app.use(express.json());
app.listen(5000, () => {
    console.log("Server started on port 5000");
})