import React, { useState, useContext, useEffect } from "react";
import { cartContext } from "../context/StateComponent";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {
    cantidadTotal,
    productosCarrito,
    aumentarCantidad,
    reducirCantidad,
    carritoAviso,
    valorTotal,
    valorTotalProductos,
    setCantidad,
  } = useContext(cartContext);

  const [show, setShow] = useState(false);
  const [carritoVacio, setCarritoVacio] = useState(true);

  const handleClose = () => {
    carritoAviso(false);
    setShow(false);
  };
  const toggleShow = () => setShow((s) => !s);

  useEffect(() => {
    if (productosCarrito.length > 0) {
      valorTotalProductos();
      setCarritoVacio(false);
      if (show) {
        carritoAviso(true);
        setCantidad(0);
      } else {
        carritoAviso(false);
      }
    }
  }, [productosCarrito, show, valorTotalProductos]);

  return (
    <>
      <div className="d-flex icon-box cart-login" onClick={toggleShow}>
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>{cantidadTotal}</span>
      </div>

      <Offcanvas
        onMouseLeave={() => setShow(false)}
        className="bg-dark offCanvas-carrito"
        placement="end"
        show={show}
        onHide={handleClose}
        scroll="true"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center">
          {carritoVacio ? (
            <p>El carrito se encuentra vacio!</p>
          ) : (
            <div className="row container-fluid mx-auto text-center mt-1 fila-itemList mb-3">
              {productosCarrito.map((item) => (
                <div key={item.id} className="col-10 mb-4">
                  <h4 className="mb-2">{item.nombre} </h4>
                  <h5 className="mb-3 letra-gris">{`Luz de ${item.categoria}`}</h5>
                  <div className="box-imgCarrito">
                    <img
                      src={item.imagen}
                      alt="imagen-producto"
                      className="carrito-img px-2"
                    />
                  </div>
                  <Button
                    onClick={() => reducirCantidad(item)}
                    className="btn-cartWidget py-0 px-2"
                  >
                    -
                  </Button>
                  <p className="parrafo-cantidad mx-2">{item.cantidad}</p>

                  <Button
                    onClick={() => aumentarCantidad(item)}
                    className="btn-cartWidget py-0 px-2"
                  >
                    +
                  </Button>
                  <h6 className="mb-1 pb-1">{`$ ${
                    item.precio * item.cantidad
                  }`}</h6>
                </div>
              ))}

              <h5 className="text-center letra-gris">
                {`Precio Total: `}
                {
                  <span className="precio-total">
                    {`$`} {valorTotal}
                  </span>
                }
              </h5>

              <Link to={"./ArteLuces/cart"}>
                <Button
                  onClick={() => {
                    setShow(false);
                  }}
                  className="btn-redireccionar"
                >
                  Ir al Carrito
                </Button>
              </Link>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartWidget;
