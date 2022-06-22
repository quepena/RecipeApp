import React, { useEffect } from 'react';
import Loader from "../components/loader";
import Message from "../components/message";
import { useDispatch, useSelector } from "react-redux";
import { recipeDetails } from "../actions/recipesActions";

const RecipeDetails = ({ match }) => {
    const dispatch = useDispatch();

    const recipeDetail = useSelector(state => state.recipeDetail);
    const { loading, error, recipe } = recipeDetail;

    useEffect(() => {
        dispatch(recipeDetails(`${match.params.id}`));
    }, [dispatch])

    return (
        <>
        </>
    )
}

export default RecipeDetails