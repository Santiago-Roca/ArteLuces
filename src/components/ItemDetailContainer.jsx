import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [luces, setLuces] = useState([]);
  useEffect(() => {
    cargarLuces();
  }, []);

  const cargarLuces = async () => {
    try {
      const respuesta = await fetch("/src/datos.json");
      const datos = await respuesta.json();
      setLuces(datos);
    } catch (error) {
      console.log(error);
    }
  };

  const item = luces.filter((item) => item.id == id);

  return (
    <section className="main">
      <div className="raw container mx-auto text-center fila-itemDetail py-3">
        {item.map((i) => (
          <div key={i.id} className="col-5">
            <ItemDetail
              img={i.imagen}
              nombre={i.nombre}
              categoria={i.categoria}
              descripcion={i.descripcion}
              garantia={i.garantia}
              precio={i.precio}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemDetailContainer;
