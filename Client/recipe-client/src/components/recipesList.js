import React, { useState, useEffect } from 'react';
import Loader from "../components/loader";
import Message from "../components/message";
import { useDispatch, useSelector } from "react-redux";
import { recipesList } from '../actions/recipesActions'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faFaceLaugh, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faFire, faBowlRice } from '@fortawesome/free-solid-svg-icons'
import { recipeAddToFavs, recipeDeleteFromFavs } from '../actions/recipesActions'

const RecipesList = () => {
    const dispatch = useDispatch();

    const recipeList = useSelector(state => state.recipeList);
    const { loading, error, recipes } = recipeList;

    useEffect(() => {
        dispatch(recipesList());
    }, [dispatch])

    const { favs } = useSelector(state => state.favReducer);

    const addToFavs = recipe => {
        dispatch(recipeAddToFavs(recipe));
    }
    const removeFromFavs = recipe => {
        dispatch(recipeDeleteFromFavs(recipe));
    }

    const handleAddToFavs = recipe => {
        addToFavs(recipe)
    }

    const handleRemoveFromFavs = recipe => {
        removeFromFavs(recipe)
    }

    const ifExists = recipe => {
        if (favs.filter(item => item.id === recipe.id).length > 0) {
            return true;
        }
        return false;
    }

    return (
        <>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <div>
                    {
                        recipes.map((item) => (
                            <LinkContainer to={`recipes/${item.id}`} key={item.id}>
                                <div className='recipe-container'>
                                    <img className='img-recipe' src={item.photo} />
                                    <h2>{item.name}</h2>
                                    <div className='recipe-items'>
                                        <div><FontAwesomeIcon className='recipe-item' icon={faFaceLaugh} />{item.difficulty}</div>
                                        <div><FontAwesomeIcon className='recipe-item' icon={faHourglass} />{item.time} min</div>
                                        <div><FontAwesomeIcon className='recipe-item' icon={faBowlRice} />{item.servings}</div>
                                        <div><FontAwesomeIcon className='recipe-item' icon={faFire} />{item.calories} kcal</div>
                                    </div>
                                </div>
                                <button onClick={ifExists(item) ? handleRemoveFromFavs(item) : handleAddToFavs(item)}><FontAwesomeIcon icon={faBookmark} /></button>
                            </LinkContainer>
                        ))
                    }
                </div>
            )}
        </>
    )
}

export default RecipesList