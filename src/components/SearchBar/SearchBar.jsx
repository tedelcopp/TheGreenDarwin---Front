import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";

// --importo actions que traiga by name-- //
import { searchProduct } from '../../redux/actions/actionIndex.js'

// --importo style-- //
import style from '../SearchBar/SearchBar.module.css'


export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    let navigate = useNavigate();

    const handleInput = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        dispatch(searchProduct(name));
        setName("");
    };

    return (
        <div className={style.backimg}>

            <div className={style.components}>
                <h3 className={style.searchTitle}>Searching for some flowers?</h3>
                <form className={style.searchBar}>
                    <input
                        className={style.input}
                        onChange={(e) => handleInput(e)}
                        placeholder='Search...'
                        maxLength="30"
                        value={name}
                    />
                    <input
                        onClick={(e) => handleInputSubmit(e)}
                        className={style.submit}
                        type='submit'
                        value='Search!'
                    />
                </form>
            </div>
        </div>
    )


}