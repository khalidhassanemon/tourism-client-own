import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Hotel = () => {
    const hotels = useLoaderData();
    console.log(hotels);
    const {title,details,image_url,category_id}=hotels;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image_url}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                <Button variant="primary">All News in this category</Button>
                </Link>  
            </Card.Body>
        </Card>
    );
};

export default Hotel;