import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [luces, setLuces] = useState([]);
  useEffect(() => {
    cargarLuces();
  }, []);

  const cargarLuces = async () => {
    try {
      const respuesta = await fetch("../src/datos.json");
      const datos = await respuesta.json();
      setLuces(datos);
    } catch (error) {
      console.log(error);
    }
  };

  const { cat } = useParams();
  const catFilter = luces.filter((item) => item.categoria == cat);

  return (
    <section className="main">
      {catFilter.length > 0 ? (
        <ItemList listaProductos={catFilter} />
      ) : (
        <ItemList listaProductos={luces} />
      )}
    </section>
  );
};

export default ItemListContainer;
