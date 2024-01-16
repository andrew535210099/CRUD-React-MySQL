import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'root', '', {
    host: 'localhost',
    port: 8111,
    dialect: 'mysql',
})

// db.authenticate()
//     .then(() =>
//         console.log('Success'))
//     .catch((err) => {
//         console.error(err)
//     })

export default db;