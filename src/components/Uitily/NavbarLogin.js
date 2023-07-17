import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Container, FormControl, Nav } from 'react-bootstrap';

import Logo from '../../images/Store.2.svg'
import login from '../../images/login.png'
import cart from '../../images/cart.png'

const NavbarLogin = () => {
    return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                    <img src={Logo} className='logo'  alt=''/>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        type="search"
                        placeholder="What are you looking for?"
                        className="me-2 w-100"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        <Nav.Link href='/login'
                            className="nav-style nav-text d-flex mt-3 justify-content-center">
                            <p style={{ color: "white" }}>Log in</p>
                            <img src={login} className="login-img" alt="sfvs" />
                        </Nav.Link>
                        <Nav.Link href='/cart'
                            className="nav-style nav-text d-flex mt-3 justify-content-center"
                            style={{ color: "white" }}>
                            <p style={{ color: "white" }}>Cart</p>
                            <img src={cart} className="login-img" alt="sfvs" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default NavbarLogin