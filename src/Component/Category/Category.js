import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelSummaryCard from '../HotelSummaryCard/HotelSummaryCard';
import Login from '../Login/Login';

const Category = () => {
    const categoryHotel = useLoaderData();
    // console.log(categoryHotel);
    return (
        <div>
            <h2>This is Category has news: {categoryHotel.length}</h2>
            {
                categoryHotel.map(data => <HotelSummaryCard
                    key={data._id}
                    data={data}
                ></HotelSummaryCard>)
            }

        </div>
    );
};

export default Category;