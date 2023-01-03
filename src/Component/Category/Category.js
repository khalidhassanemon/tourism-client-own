import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const hotel=useLoaderData();
    console.log(hotel);
    return (
        <div>
            <h5 className='ml-5'>Hotel Category:{hotel.length}</h5>
        </div>
    );
};

export default Category;