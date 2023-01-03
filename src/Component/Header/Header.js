import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import LeftSIde from '../LeftSide/LeftSIde';
const Header = () => {
    const { user,logOut } = useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error));
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/'>Tourism</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#">Login</Nav.Link>
                            <Nav.Link href="#">Registration</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
                                <NavDropdown.Item href="#">Blog</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link >

                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button className="ml-3 text-muted hover:bg-violet-400" onClick={handleLogOut}>Log out</Button>
                                        </>

                                        :
                                        <>
                                            <Link to='/login'>Login</Link>
                                            <Link to='/register' className='ml-3'>Register</Link>
                                        </>
                                }
                            </Nav.Link>
                            <Nav.Link>
                                {user?.photoURL ?
                                    <Image style={{ height: '40px' }}
                                        roundedCircle src={user?.photoURL}>
                                    </Image>
                                    :
                                    <>
                                        <FaUser></FaUser>
                                    </>
                                }
                            </Nav.Link>
                        </Nav>
                        <div className='d-lg-none d-sm-block'>
                            <LeftSIde></LeftSIde>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;