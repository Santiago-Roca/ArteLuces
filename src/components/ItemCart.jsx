import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { cartContext } from "../context/StateComponent";

const ItemCart = ({item}) => {
  const { reducirCantidad, aumentarCantidad, eliminarItem } =
    useContext(cartContext);

  return (
    <>
      <Row className="fila-pagina-carrito my-3 py-3 text-center mx-2">
        <Col md={2}>
          <img className="carrito-img" src={item.imagen} alt="carrito-img" />
        </Col>
        <Col md={3}>
          <h4 className="mb-0">{item.nombre}</h4>
        </Col>
        <Col md={2}>
          <h5 className="mb-0">{`Luz de ${item.categoria}`}</h5>
        </Col>
        <Col md={1}>
          <p className="mb-0">{`$ ${
            item.precio * item.cantidad
          }`}</p>
        </Col>
        <Col md={2} className="mt-1">
          <p className="mb-0 me-2 parrafo-cart-cantidad">Cantidad: </p>

          <Button
            onClick={() => reducirCantidad(item)}
            variant="dark"
            className="btn-cantidad-cart py-0 px-2"
          >
            -
          </Button>
          <p className="parrafo-cantidad m-0 mx-2">{item.cantidad}</p>

          <Button
            onClick={() => aumentarCantidad(item)}
            variant="dark"
            className="btn-cantidad-cart py-0 px-2"
          >
            +
          </Button>
        </Col>
        <Col md={1} className="p-0">
          <Button
            onClick={() => eliminarItem(item)}
            variant="dark"
            className="btn btn-eliminar mt-1"
          >
            X
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ItemCart;
