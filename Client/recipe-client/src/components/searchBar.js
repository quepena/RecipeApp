import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [keyword, setKeyword] = useState('')
    const history = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault()
        if (keyword.trim()) {
            history(`/search/${keyword}`);
        } else {
            history('/')
        }
    }

    return (
        <div className='search'>
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
        </div>
    )
}

export default SearchBar