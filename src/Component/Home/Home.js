import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelSummaryCard from '../HotelSummaryCard/HotelSummaryCard';

const Home = () => {
    const allData=useLoaderData();
    return (
        <div>
            <h1 className='ml-1'>Hotel:{allData.length}</h1>
            {
                allData.map(data=> <HotelSummaryCard
                key={data._id}
                data={data}
                >
                </HotelSummaryCard>)
            }
        </div> 
    );
};

export default Home;