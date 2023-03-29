import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState({});
  const [productoExiste, setProductoExiste] = useState(true);

  useEffect(() => {
    cargarProductoServidor();
  }, []);

  function redireccionar() {
    setTimeout(() => {
      window.location = "../";
    }, 1500);
  }

  //CARGAR PRODUCTO DEL SERVIDOR
  const cargarProductoServidor = () => {
    const db = getFirestore();
    const item = doc(db, "luminarias", id);
    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        const producto = { id: snapshot.id, ...snapshot.data() };
        setProducto(producto);
        setCargando(false);
      } else {
        setProductoExiste(false);
      }
    });
  };

  return (
    <section className="main text-center ">
      {!productoExiste ? (
        <>
          <p className="parrafo-noExiste pt-5">
            El producto seleccionado no existe!
          </p>
          {redireccionar()}
        </>
      ) : (
        <>{cargando ? <Loading /> : <ItemDetail item={producto} />}</>
      )}
    </section>
  );
};

export default ItemDetailContainer;
