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


function Header() {
  return (
    <header>
      <div className="hero">
        <div className="container">
          <Navbar expand="lg" variant="dark">
            <Navbar.Brand href="#">
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
                <Nav.Link href="#" className="nav-link">
                  Home
                </Nav.Link>
                <Nav.Link href="/AboutMe" className="nav-link">
                  About
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  Portfolio
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  Resume
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  Contact
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="hero-heading">
            <h1> ... </h1>
            <div className="hero-sub-title mt-5">
              <a href="#" className="text-white">
                <i className="fa fa-play-circle"></i>Stacker.
              </a>
              <a href="#" className="text-white">
                <i className="fa fa-play-circle"></i>Clicker.
              </a>
              <a href="#" className="text-white">
                <i className="fa fa-play-circle"></i>Crooner.
              </a>
              <a href="#" className="text-white">
                <i className="fa fa-play-circle"></i>Story Teller.
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// function Section() {
//   return (
//     <section>
//       <div className="p-3 mt-5 text-center">
//         <iframe
//           src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fewebdesigns%2F&width=450&layout=standard&action=like&size=small&show_faces=true"
//           width="450"
//           height="80"
//           style={{ border: "none", overflow: "hidden" }}
//         ></iframe>
//       </div>
//     </section>
//   );
// }

export default function App() {
  return (
    <div>
      <Header />

    </div>
  );
}
