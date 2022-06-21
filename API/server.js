import express from "express"
import 'dotenv/config'
import { sequelize } from './db.js'
import recipeRoutes from "./routes/recipeRoutes.js"

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())

app.use('/api/recipes/', recipeRoutes)

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`);
    });
})