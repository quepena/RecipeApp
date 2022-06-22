import axios from "axios";
import { 
    RECIPES_LIST_REQUEST,
    RECIPES_LIST_SUCCESS,
    RECIPES_LIST_FAIL,

    RECIPE_DETAILS_REQUEST,
    RECIPE_DETAILS_SUCCESS,
    RECIPE_DETAILS_FAIL,
} from "../constants/recipesConstants"

export const recipesList = () => async (dispatch) => {
    try {
        dispatch({
            type: RECIPES_LIST_REQUEST
        })

        const { data } = await axios.get(`/api/recipes`);

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

export const recipeDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: RECIPE_DETAILS_REQUEST
        })

        const { data } = await axios.get(`/api/recipes/${id}`);

        dispatch({
            type: RECIPE_DETAILS_SUCCESS,
            payload: data.result
        })
    } catch (error) {
        dispatch({
            type: RECIPE_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}