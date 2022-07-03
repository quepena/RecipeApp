import Sequelize from 'sequelize';
import CategoryModel from './models/categoryModel.js';
import RecipeModel from './models/recipeModel.js';

const sequelize = new Sequelize({
    database: process.env.DATABASE,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
},
)

const models = {
    RecipeModel: RecipeModel(sequelize, Sequelize),
    CategoryModel: CategoryModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
})

export { sequelize }

export default models