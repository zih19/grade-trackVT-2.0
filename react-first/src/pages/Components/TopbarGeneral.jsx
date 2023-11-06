import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopbarGeneral = ({signedIn}) => {
    const[IsOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!IsOpen);
    const linkItems = [
        {path: "./", component: "Home", dropdown: false},
        {path: "./about", component: "About", dropdown: false},
        {path: "./faculty", component: "Faculty", dropdown: true},
    ]

    if (!signedIn) {
        linkItems.push({path: "./login", component:"Login/Sign Up", dropdown: false})
    }

    return (
        <Navbar data-bs-theme="dark" className="bg-body-tertiary">
            <Navbar.Brand href="./">Grade-TrackVT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="./">Home</Nav.Link>
                <Nav.Link href="./about">About</Nav.Link>
                <Nav.Link href="./faculty">Faculty</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
}
export default TopbarGeneral;