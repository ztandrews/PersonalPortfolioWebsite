import React, { Component } from 'react'
import { Navbar, Nav,  Container } from 'react-bootstrap'
import {
    Link
} from "react-router-dom";



export default class NavbarComp extends Component {
    render() {
        return (
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand >Zach Andrews</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Nav>
                                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>
                                    <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
                                    <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            

        )
    }
}
