import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    cargarProductoServidor();
  }, []);

  //CARGAR PRODUCTO DEL SERVIDOR
  const cargarProductoServidor = () => {
    const db = getFirestore();
    const item = doc(db, "luminarias", id);
    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        const producto = { id: snapshot.id, ...snapshot.data() };
        setProducto(producto);
        setCargando(false);
      }
    });
  };

  return (
    <section>{cargando ? <Loading /> : <ItemDetail item={producto} />}</section>
  );
};

export default ItemDetailContainer;
