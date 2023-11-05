import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, FormControl, Nav, NavDropdown } from 'react-bootstrap';

import './navbar.css';

import Logo from '../../images/ss-logo-00.svg';
import login from '../../images/user 1.svg';
import cart from '../../images/shopping-bag 1.svg';
import NavbarSearchHook from '../../hook/search/navbarSearchHook';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../../redux/actions/authAction';


const NavbarLogin = () => {

    const dispatch = useDispatch()
    const [user, setUser] = useState("")

    useEffect(()=>{
        if(localStorage.getItem("user") != null){
            setUser(JSON.parse(localStorage.getItem("user")))
        }
        // dispatch(currentUser())
    }, [])

    // const res = useSelector(state => state.authReducer.currentUser)
    const logOut = () => {
        localStorage.removeItem("user")
        setUser('')
    }


    let word = ""
        if(localStorage.getItem("searchWord") != null){
            word = localStorage.getItem("searchWord")
        }

    const  [onChangeSearch, searchWord] = NavbarSearchHook()
    
    // ************************************ to make the navbar white while scrolling
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
    // ************************************

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
                    onChange={onChangeSearch}
                    value={word}
                        type="search"
                        placeholder="What are you looking for?"
                        className="search me-2 w-100"
                        aria-label="Search"
                    />
                    <Nav className="me-auto navStyle">
                        {
                            user !== '' ? (
                                <NavDropdown title={user.name} className="titleDropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Your Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logOut} href="/">Log Out</NavDropdown.Item>
                                    
                                    </NavDropdown>
                            ):<Nav.Link href="/login" className="nav-style nav-text d-flex mt-3 justify-content-center" style={{ color: "white" }}>
                            <p className="p-nav" >Log In</p>
                            <img src={cart} className="login-img" alt="sfvs" />
                        </Nav.Link>
                        }
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
