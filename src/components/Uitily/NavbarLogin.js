import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, FormControl, Nav } from 'react-bootstrap';

import './navbar.css';

import Logo from '../../images/ss-logo-00.svg';
import login from '../../images/user 1.svg';
import cart from '../../images/shopping-bag 1.svg';

const NavbarLogin = () => {

    const [bg, setBg] = useState('transparent')

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    function handleScroll() {
        const scrollTop = window.pageYOffset;

        if(scrollTop > 50) {
            setBg('#fff');
        } else {
            setBg('transparent')
        }
    }

    return (
        <Navbar className="sticky-top navbar" variant="dark" expand="sm" style={{ backgroundColor: bg }}>
            <Container>
                <Navbar.Brand>
                    <a href="/">
                        <img src={Logo} className="logo" alt="" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        type="search"
                        placeholder="What are you looking for?"
                        className="search me-2 w-100"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        <Nav.Link href="/login" className="nav-style nav-text d-flex mt-3 justify-content-center">
                            <p className="p-nav" >Login</p>
                            <img src={login} className="login-img" alt="sfvs" />
                        </Nav.Link>
                        <Nav.Link href="/cart" className="nav-style nav-text d-flex mt-3 justify-content-center" style={{ color: "white" }}>
                            <p className="p-nav" >Cart</p>
                            <img src={cart} className="login-img" alt="sfvs" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarLogin;
