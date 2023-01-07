import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
const LeftSIde = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/hotel-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            {
                categories.map(category =>

                    <p className='mt-2 bg-slate-800 rounded p-2 pl-4'
                        key={category.id} >

                        <ListGroup>
                            <>
                                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                            </>
                        </ListGroup>
                    </p>)
            }
        </div >
    );
};

export default LeftSIde;