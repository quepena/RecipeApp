import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { categoriesList } from '../actions/recipesActions'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    // const dispatch = useDispatch();

    // const categoryList = useSelector(state => state.categoryList);
    // const { categories } = categoryList;

    // useEffect(() => {
    //     dispatch(categoriesList())
    // }, [dispatch])

    // const [categories, setCategories] = useState([]);
    // const [categoryId, setCategoryId] = useState('');

    // const history = useNavigate();

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         console.log(categoryId);
    //         const { data } = await axios.get(`/api/categories`);
    //         setCategories(data.result);
    //         console.log(data.result);
    //     }
    //     fetchCategories();
    // }, [])

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     console.log(categoryId);
    //     if (categoryId.trim()) {
    //         history(`/${categoryId}`);
    //     } else {
    //         history('/')
    //     }
    // }

    // const handleClick = (e) => {
    //     setCategoryId(e)
    // }

    // console.log(categories);

    return (
        <div className='categories'>
            {/* {
                categories.map((item) => {
                    return (
                        <form onSubmit={submitHandler}>
                            <button type='submit' className='category-item' key={item.id} onClick={handleClick(item.id)}>
                                <div>{item.name}</div>
                            </button>
                        </form>
                    )
                })
            } */}
        </div>
    )
}

export default Categories