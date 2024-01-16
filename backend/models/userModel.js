// Berisi struktur tabel
// Bagaimana dtaa kita disimpen di database

import { DataTypes, Sequelize } from "sequelize";
// Untuk koneksi database dari database.js yang config
import db from "../config/database.js";

const {Dataypes} = Sequelize;

const User = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true,
});

export default User;

(async() => {
    await db.sync()
})();