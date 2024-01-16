import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
// Menambahkan middleware
app.use(cors());
// Supaya bisa menerima request dalam format JSON
app.use(express.json());

app.use(UserRoute);

app.listen(4000, () => {
    console.log("Server started on port 4000");
})