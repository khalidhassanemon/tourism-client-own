import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaFacebook,FaWhatsapp,FaYahoo,FaYoutube, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCaurosel from '../BrandCaurosel/BrandCaurosel';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
const RightSide = () => {

    const {providerLogin}=useContext(AuthContext);
    const googleProvider=new GoogleAuthProvider();

    const handleGoogleSignIn=()=>{
     providerLogin(googleProvider)
     .then(result=>{
        const user=result.user;
        console.log(user);
     })
     .catch(error=>console.error(error));
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
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