import {
    RECIPES_LIST_REQUEST,
    RECIPES_LIST_SUCCESS,
    RECIPES_LIST_FAIL,
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