import React from 'react'
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from './Logo/Без названия.jpeg'
import {Link} from "react-router-dom";
import Favorite from "../Favorite/Favorite";


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='md' bg='success' variant='success'>

                <Container className='headerColor'>
                    <Link to='/'>
                        <img
                            src={logo}
                            height='60'
                            width='80'
                            className='d-inline-block align-top rounded-circle'
                            alt='Logo'
                        />
                    </Link>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <div className= 'm-3'>
                            <Link to='/'>Home</Link>
                        </div>
                        <div className= 'm-3'>
                            <Link to='/cat'>Cat</Link>
                        </div>
                        <div className= 'm-3'>
                            <Link to='/dog'>Dog</Link>
                        </div>
                        <div className= 'm-3'>
                            <Link to='/favorite'>Favorite</Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;