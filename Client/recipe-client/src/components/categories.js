import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { categoriesList } from '../actions/recipesActions'
import axios from 'axios';

const Categories = () => {
    // const dispatch = useDispatch();

    // const categoryList = useSelector(state => state.categoryList);
    // const { categories } = categoryList;

    // useEffect(() => {
    //     dispatch(categoriesList())
    // }, [dispatch])

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const { data } = await axios.get(`/api/categories`);
            setCategories(data.result);
        }

        fetchCategories();
    }, [])

    console.log(categories);

    return (
        <div>
            <div className='categories' style={{ backgroundColor: 'orange' }}>
                {
                    categories.map((item) => {
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Categories