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
import { useNavigate } from 'react-router-dom';

const RecipesList = () => {
    const dispatch = useDispatch();

    const recipeList = useSelector(state => state.recipeList);
    const { loading, error, recipes } = recipeList;

    let { keyword } = useParams();
    // let { categoryId } = useParams();

    const [recipesCategory, setRecipesCategory] = useState([]);
    const [categories, setCategories] = useState([]);

    const [categoryId, setCategoryId] = useState('');

    console.log(keyword);
    console.log(categoryId);

    const history = useNavigate();

    const [recipesSearch, setRecipesSearch] = useState([]);

    const handleClick = (e) => {
        setCategoryId(e)
    }

    useEffect(() => {
        if (keyword != null && !categoryId) {
            const fetchRecipes = async (keyword) => {
                const { data } = await axios.get(`/api/recipes?keyword=${keyword}`,);
                setRecipesSearch(data.recipes);
                console.log(data.recipes);
            }

            fetchRecipes(keyword);
            console.log(2);
        }
        else if (keyword == null && categoryId) {
            const fetchRecipesByCat = async (categoryId) => {
                console.log(categoryId);
                console.log(typeof(categoryId));
                const category = categoryId.toString()
                const { data } = await axios.get(`/api/recipes?categoryId=${category}`);
                setRecipesCategory(data.result);
                console.log(data.result);

            }
            fetchRecipesByCat(categoryId);
            console.log(3);
            // dispatch(recipesList())
        } else {
            dispatch(recipesList())
            const fetchCategories = async () => {
                console.log(categoryId);
                const { data } = await axios.get(`/api/categories`);
                setCategories(data.result);
                console.log(data.result);
            }
            fetchCategories();
            console.log(1);
        }
    }, [dispatch, keyword, categoryId])

    console.log(recipes);

    return (
        <>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <div>
                    <div className='categories'>
                        {
                            categories ?
                                categories.map((item) => {
                                    return (
                                        <button className='category-item' key={item.id} onClick={() => handleClick(item.id)}>
                                            <div>{item.name}</div>
                                        </button>
                                    )
                                }) : <></>
                        }
                    </div>
                    <div className='recipes-items'>
                        {
                            keyword != null && !categoryId ? (
                                recipesSearch.map((item) => (
                                    <LinkContainer to={`/recipes/${item.id}`} key={item.id}>
                                        <div className='recipe-container'>
                                            <img className='img-recipe' src={item.photo} />
                                            <h2>{item.name}</h2>
                                        </div>
                                    </LinkContainer>
                                ))) : keyword == null && categoryId ? (
                                    recipesCategory.map((item) => (
                                        <LinkContainer to={`/recipes/${item.id}`} key={item.id}>
                                            <div className='recipe-container'>
                                                <img className='img-recipe' src={item.photo} />
                                                <h2>{item.name}</h2>
                                            </div>
                                        </LinkContainer>
                                    ))) : (
                                recipes.map((item) => (
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