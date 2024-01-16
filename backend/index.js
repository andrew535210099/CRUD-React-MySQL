import express from "express";
import cors from "cors";

const app = express();
// Menambahkan middleware
app.use(cors());
// Supaya bisa menerima request dalam format JSON
app.use(express.json());
app.listen(5000, () => {
    console.log("Server started on port 5000");
})