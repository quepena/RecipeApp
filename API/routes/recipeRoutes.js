import express from 'express'
import { getRecipes, getRecipeById, getCategories } from '../controllers/recipeController.js';

const router = express.Router();

router.get('/', getRecipes)
router.get('/categories', getCategories)
router.get('/:id', getRecipeById)

export default router;