import { signOut } from 'firebase/auth';
import React from 'react';
import logo from '../../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomActive from '../CustomActive/CustomActive';

import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={logo} height={30} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


                    </Nav>
                    <Nav>
                        <Nav.Link as={CustomActive} to="/home"><span>Home</span></Nav.Link>
                        <Nav.Link as={CustomActive} to="/blogs"><span>Blogs</span></Nav.Link>

                        {
                            user && <>

                                <Nav.Link as={CustomActive} to="/manageItem"><span>Manage Items</span></Nav.Link>
                                <Nav.Link as={CustomActive} to="/addItem"><span>Add Item</span></Nav.Link>
                                <Nav.Link as={CustomActive} to="/myItems"><span>My Items</span></Nav.Link>

                            </>
                        }
                        {
                            user ?
                                <button className='btn btn-link  text-white text-decoration-none mb-2' onClick={handleSignOut}><span>Log Out</span></button>
                                : <Nav.Link as={Link} to='/login'>
                                    <span>Login</span>
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;