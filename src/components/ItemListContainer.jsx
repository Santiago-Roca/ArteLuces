import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [luces, setLuces] = useState([]);

  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    cargarProductos(category);
  }, [category]);

  const cargarProductos = async (categoria) => {
    try {
      console.log("Entré a cargar datos del JSON");
      const respuesta = await fetch("../src/datos.json");
      const datos = await respuesta.json();
      if (categoria == "pared" || categoria == "techo" || categoria == "mesa") {
        const categoryFilter = datos.filter(
          (item) => item.categoria == category
        );
        setLuces(categoryFilter);
      } else {
        setLuces(datos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="main">
      <ItemList listaProductos={luces} />
    </section>
  );
};

export default ItemListContainer;
