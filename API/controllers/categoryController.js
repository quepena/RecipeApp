import asyncHandler from 'express-async-handler';
import models from '../db.js'

const getCategories = asyncHandler(async (req, res) => {
    const categories = await models.CategoryModel.findAll()
    res.json({ result: categories });
})

export { getCategories }