import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const FAQ = () => {
    return (
        <div>
            <h1>FAQ ABOUT Tourism:</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='https://cdn.xxl.thumbs.canstockphoto.com/3d-people-human-character-person-and-frequently-asked-questions-faq-concept-3d-render-clip-art_csp8816632.jpg' />
                <Card.Body>
                    <Card.Title>FAQ</Card.Title>
                    <Card.Text>
                     Any Question?
                    </Card.Text>
                    <Button variant="primary">GO to The Link</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FAQ;