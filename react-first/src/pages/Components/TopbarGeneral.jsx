import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const TopbarGeneral = ({signedIn}) => {
    const[IsOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!IsOpen);

    //Note: Not actually needed anymore.
    const linkItems = [
        {path: "./", component: "Home", dropdown: false},
        {path: "./about", component: "About", dropdown: false},
        {path: "./faculty", component: "Faculty", dropdown: true},
    ]

    return (
        <Navbar data-bs-theme="dark" className="bg-body-tertiary">
            <Navbar.Brand href="./">Grade-TrackVT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="./">Home</Nav.Link>
                <Nav.Link href="./about">About</Nav.Link>
                <Nav.Link href="./majors">Majors</Nav.Link>
                {!signedIn ? 
                <Nav.Link href="./login">Login/Sign Up</Nav.Link>
                :null}
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
}
export default TopbarGeneral;