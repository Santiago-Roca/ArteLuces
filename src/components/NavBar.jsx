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
          <img
            className="logo-img"
            src="https://raw.githubusercontent.com/santiGTI/Mundo-Movie/main/src/assets/imagenes/logo.png"
            alt="logo-web"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-2 my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/">Inicio</Nav.Link>

            {/* <Nav.Link href="/itemListContainer">ItemList</Nav.Link> */}
            <Nav.Link as={Link} to="/itemListContainer">
              ItemList
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/prueba:id">Prueba</Nav.Link> */}

            {/* <Link to="/itemListContainer"> */}
            {/* <Nav.Link href="#action2">ItemList</Nav.Link> */}
            {/* <button>ItemList</button>
            </Link> */}

            <Nav.Link href="#action3">Polular</Nav.Link>
            <Nav.Link href="#action4">Deportes</Nav.Link>
            <NavDropdown title="Series" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Recientes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Polulares</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Mejor puntuadas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex form-busqueda ms-4">
            <Form.Control
              type="search"
              placeholder="Busqueda de Películas o Series"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn-buscar" variant="dark">
              Buscar
            </Button>
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
