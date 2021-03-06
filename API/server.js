import express from "express"
import 'dotenv/config'
import { sequelize } from './db.js'
import recipeRoutes from "./routes/recipeRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import cors from 'cors'

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/recipes/', recipeRoutes)
app.use('/api/categories/', categoryRoutes)

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`);
    });
})