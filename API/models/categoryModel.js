import Sequelize from 'sequelize';

const CategoryModel = (sequelize, { DataTypes }) => {
    const Category = sequelize.define('categories', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
    }, {
        timestamps: false
    })

    Category.associate = (models) => {
        Category.hasMany(models.RecipeModel)
    }

    return Category
}

export default CategoryModel