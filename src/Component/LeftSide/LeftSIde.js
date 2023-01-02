import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSIde = () => {
    const [categories,setCategories]=useState([]);
     
    useEffect(()=>{
        fetch('http://localhost:5000/hotel-categories')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div>
            <h1>Categories Length{categories.length}</h1>
            {
                categories.map(category=>
                <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSIde;