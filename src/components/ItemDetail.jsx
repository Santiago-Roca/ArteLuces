import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useEffect } from "react";
import { cartContext } from "../context/StateComponent";
import { Col, Row } from "react-bootstrap";

const ItemDetail = ({ item }) => {
  const {
    addItem,
    cantidadPermitidaItem,
    cantidad,
    aumentarCantidad,
    reducirCantidad,
    carritoAviso,
    setCantidad,
  } = useContext(cartContext);

  useEffect(() => {
    carritoAviso(false);
    setCantidad(1);
  }, []);

  function mostrarStock() {
    if (cantidadPermitidaItem(item) >= 1) {
      return (
        <Card.Text>
          {`Stock: `}
          {<span className="numero-stock">{cantidadPermitidaItem(item)}</span>}
          {` unidades disponibles`}
        </Card.Text>
      );
    } else {
      return <Card.Text className="noStock">¡Sin Stock!</Card.Text>;
    }
  }

  return (
    <>
      <Row className="main text-center justify-content-center">
        <Col md={5}>
          <div className="boxImg-detail">
            <img variant="top" src={item.imagen} />
          </div>
        </Col>
        <Col md={6} className="pe-5 ps-0">
          <h1 className="pt-5 pb-1 mt-2 titulo-detail">{item.nombre}</h1>
          <h3 className="my-3 text-muted">{`Luz de ${item.categoria}`}</h3>
          <div className="mx-auto px-3 mb-2">
            <p className="px-5 parrafo-detail">{item.descripcion}</p>
          </div>
          <p className="parrafo-garantia-detail">{`Garantía ${item.garantia}`}</p>
          {mostrarStock()}
          <h6 className="precio-detail mb-3">{`$ ${item.precio}`}</h6>
          <div className="mb-3">
            <Button
              onClick={() => reducirCantidad(item)}
              variant="dark"
              className="btn-cantidad"
            >
              -
            </Button>
            <Card.Text className="parrafo-cantidad mx-2 px-2 my-2">
              {cantidad}
            </Card.Text>
            <Button
              onClick={() => aumentarCantidad(item)}
              variant="dark"
              className="btn-cantidad"
            >
              +
            </Button>
          </div>

          <Button
            className="mt-3 btn-agregar"
            variant="dark"
            onClick={() => addItem(item, cantidad)}
          >
            Agregar al Carrito
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ItemDetail;
