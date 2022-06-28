import React, { useEffect } from 'react';
import Loader from "../components/loader";
import Message from "../components/message";
import { useDispatch, useSelector } from "react-redux";
import { recipeDetails } from "../actions/recipesActions";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faFaceLaugh } from '@fortawesome/free-regular-svg-icons'
import { faFire, faBowlRice } from '@fortawesome/free-solid-svg-icons'

const RecipeDetails = () => {
    const dispatch = useDispatch();

    const recipeDetail = useSelector(state => state.recipeDetail);
    const { loading, error, recipe } = recipeDetail;

    let { recipeId } = useParams();

    useEffect(() => {
        dispatch(recipeDetails(recipeId));
    }, [dispatch, recipeId])

    return (
        <>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <div className='recipe-det-container'>
                    <img className='img-recipe-det' src={recipe.photo} />
                    <div className='recipe-det-items'>
                        <div className='recipe-det-items-name'>{recipe.name}</div>
                        <div className='recipe-items'>
                            <div><FontAwesomeIcon className='recipe-item' icon={faFaceLaugh} />{recipe.difficulty}</div>
                            <div><FontAwesomeIcon className='recipe-item' icon={faHourglass} />{recipe.time} min</div>
                            <div><FontAwesomeIcon className='recipe-item' icon={faBowlRice} />{recipe.servings}</div>
                            <div><FontAwesomeIcon className='recipe-item' icon={faFire} />{recipe.calories} kcal</div>
                        </div>
                        <h1>Ingredients</h1>
                        <div className='ingredients'>{recipe.ingredients}</div>
                        <h1>Directions</h1>
                        <div className='directions'>{recipe.directions}</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default RecipeDetails