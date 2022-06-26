import asyncHandler from 'express-async-handler';
import models from '../db.js'
import sequelize from 'sequelize';

const getPagination = (page, size) => {
    const limit = size ? + size : 3;
    const offset = page ? page * limit : 0;
    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: recipes } = data;
    const currentPage = page ? + page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, recipes, totalPages, currentPage };
};

const getRecipes = asyncHandler(async (req, res) => {
    const { categoryId } = req.query;
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    const keyword = req.query.keyword

    if (categoryId != null) {
        await models.RecipeModel.findAndCountAll({
            where: { "categoryId": categoryId }, limit, offset, order: [['name', 'ASC']]
        }).then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
    } else {
        if (keyword != null) {
            await models.RecipeModel.findAndCountAll({
                where: {
                    name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + keyword.toLowerCase() + '%')
                }, limit, offset, order: [['name', 'ASC']],
            }).then(data => {
                const response = getPagingData(data, page, limit);
                res.send(response);
            })
        } else {
            const recipes = await models.RecipeModel.findAll({order: [['name', 'ASC']]})
    
            res.json({ result: recipes });
        }
    }
})

const getRecipeById = asyncHandler(async (req, res) => {
    const recipe = await models.RecipeModel.findByPk(req.params.id)

    res.json({ result: recipe });
})

export { getRecipes, getRecipeById };