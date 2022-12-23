import axios from "axios";
import {
    RECIPES_LIST_REQUEST,
    RECIPES_LIST_SUCCESS,
    RECIPES_LIST_FAIL,

    RECIPE_DETAILS_REQUEST,
    RECIPE_DETAILS_SUCCESS,
    RECIPE_DETAILS_FAIL,

    RECIPE_ADD_TO_FAVS_SUCCESS,

    RECIPE_REMOVE_FROM_FAVS_SUCCESS,
} from "../constants/recipesConstants"

export const recipesList = () => async (dispatch) => {
    try {
        dispatch({
            type: RECIPES_LIST_REQUEST
        })

        const { data } = await axios.get(`https://expressjs-postgres-production-54d1.up.railway.app/api/recipes/`);

        dispatch({
            type: RECIPES_LIST_SUCCESS,
            payload: data.result
        })
    } catch (error) {
        dispatch({
            type: RECIPES_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}