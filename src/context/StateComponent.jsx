import React, { createContext, useState } from "react";

export const cartContext = createContext();

const StateComponent = ({ children }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [cantidad, setCantidad] = useState(1);
  const [estaEnCarrito, setEstaEnCarrito] = useState(false);
  const [carritoVacio, setCarritoVacio] = useState(true);
  const [valorTotal, setValorTotal] = useState(0);

  //AGREGAR UN ITEM AL CARRITO
  const addItem = (producto, cantidad) => {
    if (cantidadPermitidaItem(producto) >= cantidad) {
      const existeProducto = productosCarrito.find(
        (item) => item.id == producto.id
      );
      if (existeProducto == undefined) {
        producto.cantidad = cantidad;
        setCantidadTotal(cantidadTotal + cantidad);
        setProductosCarrito([...productosCarrito, producto]);
      } else {
        let posicion = productosCarrito.indexOf(existeProducto);
        productosCarrito[posicion].cantidad += cantidad;
        setCantidadTotal(cantidadTotal + cantidad);
      }
      setCantidad(1);
      setCarritoVacio(false);
    }
  };

  //VALOR TOTAL
  const valorTotalProductos = () => {
    let valor = 0;
    productosCarrito.map((item) => {
      valor = valor + item.precio * item.cantidad;
    });
    setValorTotal(valor);
  };

  //STOCK DISPONIBLE POR ITEM
  function cantidadPermitidaItem(producto) {
    let stockDisponible;
    const existeProductoProducto = productosCarrito.find(
      (item) => item.id == producto.id
    );
    if (existeProductoProducto == undefined) {
      stockDisponible = producto.stock;
    } else {
      let posicion = productosCarrito.indexOf(existeProductoProducto);
      let stockUsado = productosCarrito[posicion].cantidad;
      stockDisponible = producto.stock - stockUsado;
    }
    return stockDisponible;
  }

  //AUMENTAR CANTIDAD
  const aumentarCantidad = (producto) => {
    if (cantidadPermitidaItem(producto) > cantidad) {
      if (estaEnCarrito) {
        let posicion = productosCarrito.indexOf(producto);
        productosCarrito[posicion].cantidad += 1;
        setCantidadTotal(cantidadTotal + 1);
      } else {
        setCantidad(cantidad + 1);
      }
    }
  };

  //REDUCIR CANTIDAD
  const reducirCantidad = (producto) => {
    if (estaEnCarrito) {
      let posicion = productosCarrito.indexOf(producto);
      if (productosCarrito[posicion].cantidad > 1) {
        productosCarrito[posicion].cantidad -= 1;
        setCantidadTotal(cantidadTotal - 1);
      }
    } else if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  //ELIMINAR PRODUCTO
  const eliminarItem = (producto) => {
    const resultado = productosCarrito.filter((item) => item.id != producto.id);
    setProductosCarrito(resultado);
    setCantidadTotal(cantidadTotal - producto.cantidad);
    valorTotalProductos();
  };

  //AVISAR QUE ESTÁ EN EL CARRITO
  const carritoAviso = (valor) => {
    setEstaEnCarrito(valor);
  };

  return (
    <cartContext.Provider
      value={{
        productosCarrito,
        addItem,
        cantidadTotal,
        cantidadPermitidaItem,
        cantidad,
        aumentarCantidad,
        reducirCantidad,
        carritoAviso,
        estaEnCarrito,
        eliminarItem,
        carritoVacio,
        valorTotal,
        valorTotalProductos,
        setCantidad,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default StateComponent;
