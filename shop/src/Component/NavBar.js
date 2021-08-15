import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
    const handleCartButton = (event) => {
        event.preventDefault();
    };
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" >Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">สินค้าใหม่</Nav.Link>
                    <Nav.Link href="/">สินค้าขายดี</Nav.Link>
                    <Nav.Link href="/">สินค้าลดราคา</Nav.Link>
                    <Nav.Link href="/">สินค้าแนะนำ</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/">
                        <img
                            alt=""
                            src="https://www.nicepng.com/png/detail/853-8539483_png-file-search-button-icon-png.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Nav.Link>
                    <Nav.Link href="/cart" onClick={handleCartButton}>
                        <img
                            alt=""
                            src="https://img.favpng.com/12/18/15/shopping-cart-icon-png-favpng-e5DiMUYLNYaTjdsibphFUCAxC.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Nav.Link>
                    <Nav.Link href="/">
                        <img
                            alt=""
                            src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}

export default NavBar;