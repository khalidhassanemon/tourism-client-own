import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaFacebook,FaWhatsapp,FaYahoo,FaYoutube, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCaurosel from '../BrandCaurosel/BrandCaurosel';
const RightSide = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button className='mb-2' variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div>
                <h4>Find us On</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2' ><FaFacebook></FaFacebook></ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaWhatsapp></FaWhatsapp></ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaYoutube></FaYoutube></ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaTwitter></FaTwitter></ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYahoo></FaYahoo></ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCaurosel></BrandCaurosel>
            </div>
        </div>
    );
};

export default RightSide;