// import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import logo from "../assets/images/logo.png";
// import Image from "react-bootstrap/Image";
// import Figure from "react-bootstrap/Figure";
import circleLogo from "../assets/images/circleLogo.png";
import { TypeAnimation } from "react-type-animation";


function Header() {
  return (
    <header>
      <div className="hero">
        <div className="container">
          <Navbar expand="lg" variant="dark">
            <Navbar.Brand href="/Header">
              <img
                src={circleLogo}
                target="_blank"
                alt="logo"
                height="400"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapse" />
            <Navbar.Collapse id="navbarCollapse">
              <Nav className="main-links has-text-centered">
                <Nav.Link href="/Header" className="nav-link">
                  Home
                </Nav.Link>
                <Nav.Link href="/AboutMe" className="nav-link">
                  About
                </Nav.Link>
                <Nav.Link href="Portfolio" className="nav-link">
                  Portfolio
                </Nav.Link>
                <Nav.Link href="Resume" className="nav-link">
                  Resume
                </Nav.Link>
                <Nav.Link href="/Contact" className="nav-link">
                <TypeAnimation
                sequence={[
                  "Concat",
                  1000,
                  "Contact",
                  1000,
                 
                ]}
                speed={50}
                repeat={0}
               
              />
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
        </div>
      </div>
    </header>
  );
}


export default function App() {
  return (
    <div>
      <Header />

    </div>
  );
}
