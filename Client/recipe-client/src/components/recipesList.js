import React, { useState, useEffect } from 'react';
import Loader from "../components/loader";
import Message from "../components/message";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap'
import SearchBar from './searchBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion'
import { recipesList } from '../actions/recipesActions';

const RecipesList = () => {
    const dispatch = useDispatch();

    const recipeList = useSelector(state => state.recipeList);
    const { loading, error, recipes } = recipeList;

    let { keyword } = useParams();

    const [recipesCategory, setRecipesCategory] = useState([]);
    const [categories, setCategories] = useState([]);

    const [categoryId, setCategoryId] = useState('');

    const [recipesSearch, setRecipesSearch] = useState([]);

    const handleClick = (e) => {
        setCategoryId(e)
    }

    useEffect(() => {
        if (keyword != null && !categoryId) {
            const fetchRecipes = async (keyword) => {
                const { data } = await axios.get(`/api/recipes?keyword=${keyword}`,);
                setRecipesSearch(data.recipes);
            }
            fetchRecipes(keyword);
        }
        else if (keyword == null && categoryId) {
            const fetchRecipesByCat = async (categoryId) => {
                const { data } = await axios.get(`/api/recipes?categoryId=${categoryId}`);
                setRecipesCategory(data.recipes);
            }
            fetchRecipesByCat(categoryId);
        } else {
            dispatch(recipesList())
            const fetchCategories = async () => {
                const { data } = await axios.get(`/api/categories`);
                setCategories(data.result);
            }
            fetchCategories();
        }
    }, [dispatch, keyword, categoryId])

    return (
        <>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <div>
                    <SearchBar />
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
                    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                        <div className='recipes-items'>
                            {
                                keyword != null && !categoryId ? (
                                    recipesSearch.map((item) => (
                                        <LinkContainer to={`/recipes/${item.id}`} key={item.id}>
                                            <div className='recipe-container'>
                                                <img className='img-recipe' src={item.photo} />
                                                <div className='recipe-name'>{item.name}</div>
                                            </div>
                                        </LinkContainer>
                                    ))) : keyword == null && categoryId ? (
                                        recipesCategory.map((item) => (
                                            <LinkContainer to={`/recipes/${item.id}`} key={item.id}>
                                                <div className='recipe-container'>
                                                    <img className='img-recipe' src={item.photo} />
                                                    <div className='recipe-name'>{item.name}</div>
                                                </div>
                                            </LinkContainer>
                                        ))) : (
                                    recipes.map((item) => (
                                        <LinkContainer to={`/recipes/${item.id}`} key={item.id}>
                                            <div className='recipe-container'>
                                                <img className='img-recipe' src={item.photo} />
                                                <div className='recipe-name'>{item.name}</div>
                                            </div>
                                        </LinkContainer>
                                    )))
                            }
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    )
}

export default RecipesList