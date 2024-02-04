import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import Busqueda from "./Busqueda";
import LoginWidget from "./LoginWidget";
import { cartContext } from "../context/StateComponent";

const NavBar = () => {

  // const [busqueda, setBusqueda] = useState("")
  // const searchMovie = (e)=>{
  //   setBusqueda(e.target.value)
  //   console.log(busqueda)
  // }


  const { user, setUser } = useContext(cartContext)

  const showUser = () => {
    return `{<Nav.Link as={Link} to="/ArteLuces/inicio">
    Inicio
  </Nav.Link>}`
  }
  // const showUser = () => {
  //   return `<div>${user.name}</div>`
  // }

  return (



    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/ArteLuces"}>
            <img
              className="logo-img"
              src="https://firebasestorage.googleapis.com/v0/b/arteluces-58b7c.appspot.com/o/logo-luz.png?alt=media&token=a8517621-8612-4ea6-ba4f-b9160bd7c467"
              alt="logo-web"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-2 my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/ArteLuces/inicio">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/ArteLuces">
              Catálogo de Productos
            </Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/ArteLuces/category/pared">
                Luces de Pared
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ArteLuces/category/techo">
                Luces de Techo
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ArteLuces/category/mesa">
                Luces de Mesa
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex form-busqueda ms-4">
            <Busqueda />
            <CartWidget />
            <LoginWidget />
              
            {/* <Nav.Link as={Link} to="/login">
              <LoginWidget />
            </Nav.Link> */}

            {/* {user && <div className="d-flex icon-box">
              {user.userName}
            </div>} */}

            {/* {user != null ? ( */}

            {/* ORIGINAL */}
            {/* {user.name ? (
              <>
                <div className="d-flex icon-box"><LoginWidget /> </div>
                <div className="d-flex icon-box">{user.userName} </div>
                <div onClick={e => {
                  e.preventDefault()
                  setUser({})
                }} className="d-flex icon-box enlace">Cerrar Sesión</div>
              </>
            ) : (<Nav.Link as={Link} to="/login">
              <LoginWidget />
            </Nav.Link>)} */}

            {/* <NavLink to={"/login"}><LoginWidget /></NavLink> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
