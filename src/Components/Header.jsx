import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <Nav.Link href="#home">صفحه اصلی</Nav.Link>
                        <Nav.Link href="#link">فیلم</Nav.Link>
                        <Nav.Link href="#link">سریال</Nav.Link>
                        <Nav.Link href="#link">پربازدیدترین ها</Nav.Link>
                        <Nav.Link href="#link">جدید ترین ها</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#home">FilmoveBox</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
