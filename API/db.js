import Sequelize from 'sequelize';
import CategoryModel from './models/categoryModel.js';
import RecipeModel from './models/recipeModel.js';

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: 'postgres',
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