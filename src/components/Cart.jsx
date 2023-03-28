import React, { useEffect } from "react";
import { useContext } from "react";
import { cartContext } from "../context/StateComponent";
import Container from "react-bootstrap/Container";
import ItemCart from "./ItemCart";
import FormCompra from "./FormCompra";

const Cart = () => {
  const { productosCarrito, estaEnCarrito, carritoAviso, valorTotal } =
    useContext(cartContext);

  function redireccionar() {
    window.location = "./";
  }

  useEffect(() => {
    if (productosCarrito.length > 0) {
      carritoAviso(true);
    } else {
      redireccionar();
    }
  }, [productosCarrito, estaEnCarrito]);

  return (
    <>
      <section className="main text-center">
        <Container fluid>
          {productosCarrito.length > 0 ? (
            <>
              {productosCarrito.map((item) => (
                <div key={item.id}>
                  <ItemCart item={item} />
                </div>
              ))}
              <div>
                <h5 className="text-center mt-4">
                  {`Precio Total: `}
                  {
                    <span className="precio-total-cart">
                      {`$`} {valorTotal}
                    </span>
                  }
                </h5>
                <FormCompra />
              </div>
            </>
          ) : (
            "El carrito se encuentra vacio!"
          )}
        </Container>
      </section>
    </>
  );
};

export default Cart;
