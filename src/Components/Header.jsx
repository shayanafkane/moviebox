import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Header() {
    return (
        <Navbar expand="lg" className='border-bottom'>
            <Container>
                <Navbar.Brand href="#home" className='text-white'>FilmovieBox</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='me-auto'>
                    <Nav className='ms-auto'>
                        <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Movies</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Series</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Top Rated</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>News</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
