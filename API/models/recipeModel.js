import { Sequelize } from 'sequelize';

const RecipeModel = (sequelize, { DataTypes }) => {
    const Recipe = sequelize.define('recipes', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        difficulty: {
            type: Sequelize.ENUM('Easy', 'Medium', 'Hard'),
        },
        time: {
            type: Sequelize.INTEGER
        },
        servings: {
            type: Sequelize.INTEGER,
        },
        calories: {
            type: Sequelize.INTEGER
        },
        photo: {
            type: Sequelize.STRING
        },
        ingredients: {
            type: Sequelize.STRING
        },
        directions: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    })

    Recipe.associate = (models) => {
        Recipe.belongsTo(models.CategoryModel)
    }

    Recipe.getRecipes = async() => {
        const recipes = Recipe.findAll()
        
        return recipes
    }

    return Recipe
}

export default RecipeModel