import React, { useState, useEffect } from 'react';
import Loader from "../components/loader";
import Message from "../components/message";
import { useDispatch, useSelector } from "react-redux";
import { categoriesList, recipesList, recipesSearchList } from '../actions/recipesActions'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faFaceLaugh, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faFire, faBowlRice } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './searchBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Categories from './categories';

const RecipesList = () => {
    const dispatch = useDispatch();

    const recipeList = useSelector(state => state.recipeList);
    const { loading, error, recipes } = recipeList;

    let { keyword } = useParams();

    console.log(keyword);

    const [recipesSearch, setRecipesSearch] = useState([]);

    useEffect(() => {
        if (keyword == null) {
            dispatch(recipesList())
        }
        else {
            const fetchRecipes = async (keyword) => {
                const { data } = await axios.get(`/api/recipes?keyword=${keyword}`,);
                setRecipesSearch(data.recipes);
                console.log(data.recipes);
            }

            fetchRecipes(keyword);
        }
    }, [dispatch, keyword])

    console.log(recipes);

    return (
        <>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <div>
                    <SearchBar />
                    <div className='recipes-items'>
                        {
                            keyword == undefined ? (
                                recipes.map((item) => (
                                    <LinkContainer to={`/recipes/${item.id}`} key={item.id}>
                                        <div className='recipe-container'>
                                            <img className='img-recipe' src={item.photo} />
                                            <h2>{item.name}</h2>
                                        </div>
                                    </LinkContainer>
                                ))) : (
                                recipesSearch.map((item) => (
                                    <LinkContainer to={`/recipes/${item.id}`} key={item.id}>
                                        <div className='recipe-container'>
                                            <img className='img-recipe' src={item.photo} />
                                            <h2>{item.name}</h2>
                                        </div>
                                    </LinkContainer>
                                )))
                        }
                    </div>
                </div>
            )}
        </>
    )
}

export default RecipesList