import React from "react";
import s from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from '../../redux/filters/selectors';
import { setNameFilter } from '../../redux/filters/slice';

const SearchBox = () => {
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();


    const handleChange = e => {
        dispatch(setNameFilter(e.target.value));
    };

    return (
        <div>
            <label className={s.searchBox}>
                <span className={s.inputName}>Find contacts by name</span>
                <input className={s.searchInput} name='searchField' type="text" value={filter} onChange={handleChange} />
            </label>
        </div>
    );
};

export default SearchBox;