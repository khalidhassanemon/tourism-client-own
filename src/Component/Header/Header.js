import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSIde from '../LeftSide/LeftSIde';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Tourism</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="#">Login</Nav.Link>
                            <Nav.Link href="#">Registration</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
                                <NavDropdown.Item href="#">Blog</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">User Name</Nav.Link>
                            <Nav.Link eventKey={2} href="#">
                                Dank memes
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