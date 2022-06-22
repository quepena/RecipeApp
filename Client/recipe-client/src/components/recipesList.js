import React, { useState, useEffect } from 'react';
import Loader from "../components/loader";
import Message from "../components/message";
import { useDispatch, useSelector } from "react-redux";
import { recipesList } from '../actions/recipesActions'
import { LinkContainer } from 'react-router-bootstrap'

const RecipesList = () => {
    const dispatch = useDispatch();

    const recipeList = useSelector(state => state.recipeList);
    const { loading, error, recipes } = recipeList;

    useEffect(() => {
        dispatch(recipesList());
    }, [dispatch])

    return (
        <>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <div>
                    {
                        recipes.map((recipe) => (
                            <LinkContainer to={`/recipes/${recipe.id}`} key={recipe.id}>
                                <h1>{recipe.name}</h1>
                            </LinkContainer>
                        ))
                    }
                </div>
            )}
        </>
    )
}

export default RecipesList