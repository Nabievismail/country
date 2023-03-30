import React from 'react';
import { useDispatch } from 'react-redux';
import { getRequestSearchName } from '../redux/request';
import { useNavigate } from 'react-router-dom';

const CountryItem = (props) => {
    const {name, flags, continents, capital} = props
    const dispatch= useDispatch();
    const navigate = useNavigate();
    return (
        <div className='card'>
            <div className="flag">
                <img src={flags.png} alt="" />
            </div>
            <h2>name: {name.common}</h2>
            <div className="description">
                <span>capital: {capital&& capital[0]}</span>
                <span>continents: {continents[0]}</span>
            </div>
        </div>
    );
};

export default CountryItem;