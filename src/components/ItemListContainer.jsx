import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../context/StateComponent";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {
  const { category } = useParams();

  const { carritoAviso, serverData, cargarProductosServidor, setCategory, cargando } = useContext(cartContext);

  useEffect(() => {
    setCategory(category)
    carritoAviso(false);
    cargarProductosServidor(category);
  }, [category]);

  return (
    <section className="main">
      {cargando ? <Loading /> : <ItemList listaProductos={serverData} />}
    </section>
  );
};

export default ItemListContainer;
