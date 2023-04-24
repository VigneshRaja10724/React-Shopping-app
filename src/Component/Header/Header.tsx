import {Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand >RECIPES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
          <Link to="/" className="nav-link" >RECIPE</Link>
          <Link to="/shoppingList" className="nav-link" >SHOPPING LIST</Link>
            <NavDropdown  className="justify-content-end" title="Manage" id="nav-add">
              <NavDropdown.Item href="#action/3.1">Save</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fetch
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sing Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}