import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from "../components/loader";
import Message from "../components/message";
import { useDispatch, useSelector } from "react-redux";
import { recipesSearchList } from '../actions/recipesActions'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faFaceLaugh, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faFire, faBowlRice } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    // const dispatch = useDispatch();

    // const recipeSearch = useSelector(state => state.recipeSearch);
    // const { recipes } = recipeSearch;

    const [keyword, setKeyword] = useState('')
    const history = useNavigate();

    // useEffect(() => {
    //     dispatch(recipesSearchList());
    // }, [dispatch])

    // let value = ''

    // const handleChange = event => {
    //     value = event.target.value
    //     dispatch(recipesSearchList(event.target.value));

    //     return value
    // };

    const submitHandler = (event) => {
        event.preventDefault()
        if (keyword.trim()) {
            history(`/search/${keyword}`);
        } else {
            history('/')
        }
    }

    // console.log(recipes);
    console.log(keyword);

    return (
        <>
            <div>
                <form onSubmit={submitHandler}>
                    <input
                        className='input'
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </form>
            </div>
        </>
    )
}

export default SearchBar