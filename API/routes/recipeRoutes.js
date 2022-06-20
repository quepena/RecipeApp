import express from 'express'
import { getRecipes } from '../controllers/recipeController.js';

const router = express.Router();

router.route('/').get(getRecipes)

export default router;