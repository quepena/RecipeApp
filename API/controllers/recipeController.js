import asyncHandler from 'express-async-handler';
import Sequelize from "sequelize";
import RecipeModel from '../models/recipeModel.js';

const getRecipes = asyncHandler(async (req, res) => {
    const recipes = await RecipeModel.findAll()

    res.json({ result: recipes });
})

export { getRecipes };