import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState({});
  useEffect(() => {
    cargarProducto();
  }, []);

  const cargarProducto = async () => {
    try {
      const respuesta = await fetch("/src/datos.json");
      const datos = await respuesta.json();
      const item = datos.find((item) => item.id == id);
      setProducto(item);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="main">
      <div className="raw container mx-auto text-center fila-itemDetail py-3">
        <div className="col-5">
          <ItemDetail
            img={producto.imagen}
            nombre={producto.nombre}
            categoria={producto.categoria}
            descripcion={producto.descripcion}
            garantia={producto.garantia}
            precio={producto.precio}
          />
        </div>
      </div>
    </section>
  );
};

export default ItemDetailContainer;
