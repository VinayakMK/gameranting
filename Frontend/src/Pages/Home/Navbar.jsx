import React from 'react';
import { Navbar, NavDropdown, Container, Nav} from 'react-bootstrap';

export default function navbar() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{color:"red", fontWeight:"bold"}}><h2>RantGaming</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><h4>Latest</h4></Nav.Link>
            <Nav.Link href="#action2"><h4>What's New?</h4></Nav.Link>
            <NavDropdown title ="More" id="navbarScrollingDropdown" className="nav-dropdown-title">
              <NavDropdown.Item href="#action3"><h4>Profile</h4></NavDropdown.Item>
              <NavDropdown.Item href="#action4"><h4>Store</h4></NavDropdown.Item>
              <NavDropdown.Item href="#action5"><h4>About</h4></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">
                <h4>Report</h4>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
