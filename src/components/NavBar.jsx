import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              className="logo-img"
              src="../src/assets/imagenes/logo-luz.png"
              alt="logo-web"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-2 my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/inicio">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Catálogo de Productos
            </Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/pared">
                Luces de Pared
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/techo">
                Luces de Techo
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/mesa">
                Luces de Mesa
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex form-busqueda ms-4">
            <Form.Control
              type="search"
              placeholder="Buscar un producto"
              className="me-2 buscar-nav"
              aria-label="Search"
            />
            <Button className="btn-buscar" variant="dark">
              Buscar
            </Button>
            <CartWidget />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
