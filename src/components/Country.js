import React from 'react';
import { useSelector } from 'react-redux';
import CountryItem from "./CountryItem"

const Country = () => {
    const {countries, loading} = useSelector(state => state)
    if(loading) {
        return <h1 style={{
            textAlign:'center',
            marginTop: '50px'
        }}>loading...</h1>
    }
    return (
        <div className='countries'>
            {
                countries && countries.map((item, index) => (
                    <CountryItem key={index} {...item}/>
                ))
            }
        </div>
    );
};

export default Country;