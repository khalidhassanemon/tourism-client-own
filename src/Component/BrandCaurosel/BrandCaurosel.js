import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Images1 from '../Images/banner.jpg';
import Images2 from '../Images/banner-2.jpg';
const BrandCaurosel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Images1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Images2}
                    alt="second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCaurosel;