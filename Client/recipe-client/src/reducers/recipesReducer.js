import {
    RECIPES_LIST_REQUEST,
    RECIPES_LIST_SUCCESS,
    RECIPES_LIST_FAIL,

    RECIPE_DETAILS_REQUEST,
    RECIPE_DETAILS_SUCCESS,
    RECIPE_DETAILS_FAIL,

    CATEGORIES_LIST_REQUEST,
    CATEGORIES_LIST_SUCCESS,
    CATEGORIES_LIST_FAIL,
} from "../constants/recipesConstants";

export const recipesListReducer = (state = { recipes: [] }, action) => {
    switch (action.type) {
        case RECIPES_LIST_REQUEST:
            return { loading: true }
        case RECIPES_LIST_SUCCESS:
            return { loading: false, recipes: action.payload }
        case RECIPES_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const recipeDetailsReducer = (state = { recipe: {} }, action) => {
    switch (action.type) {
        case RECIPE_DETAILS_REQUEST:
            return { ...state, loading: true }
        case RECIPE_DETAILS_SUCCESS:
            return { loading: false, recipe: action.payload }
        case RECIPE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const categoriesListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case CATEGORIES_LIST_REQUEST:
            return { loading: true }
        case CATEGORIES_LIST_SUCCESS:
            return { loading: false, categories: action.payload }
        case CATEGORIES_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}