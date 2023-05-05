import React from "react";
import "./Uawin_header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

import ua_win from "../Assets/win_logo.png";

function Uawin_header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" className="py-3" style={{background:"#0E1924"}}>
        <Container>
          <Navbar.Brand href="#Home">
            <img src={ua_win} alt="#" className="win_logo w-75 w-md-75" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-around">
            <Nav className="gap-1 gap-md-4">
              <Nav.Link href="#Home" className="nav_points">Home</Nav.Link>
              <Nav.Link href="#Why_UAWIN" className="nav_points">Why UAWIN</Nav.Link>
              <Nav.Link href="#Tokenomic" className="nav_points">Tokenomics</Nav.Link>
              <Nav.Link href="#Manifest" className="nav_points">Manifest</Nav.Link>
              <Nav.Link href="#FAQ" className="nav_points">FAQ</Nav.Link>
            </Nav>
            <Nav className="">
              <div className="selt_uper gap-2">
              <Form.Select aria-label="Default select example" className="selct text-white">
                <option className="other_lan">English</option>
                <option className="other_lan" value="1">French</option>
                <option className="other_lan" value="2">Spanish</option>
                <option className="other_lan" value="3">Chinese</option>
              </Form.Select>

              <button className="btn btn-md contect">Contact Us</button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Uawin_header;
