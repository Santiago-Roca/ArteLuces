import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../context/StateComponent";
import ItemList from "./ItemList";
// import {
//   collection,
//   getDocs,
//   getFirestore,
//   query,
//   where,
// } from "firebase/firestore";
import Loading from "./Loading";
import Busqueda from "./Busqueda";

const ItemListContainer = () => {
  // const [serverData, setServerData] = useState([]);
  // const [cargando, setCargando] = useState(true);
  const { category } = useParams();
  // console.log(category)

  const { carritoAviso, serverData, cargarProductosServidor, setCategory, cargando } = useContext(cartContext);



  useEffect(() => {
    setCategory(category)
    // console.log(category)
    // if (category != "") {
    //   console.log(category)
    //   setCategory(category)
    // }
    carritoAviso(false);
    cargarProductosServidor(category);
  }, [category]);

  // //CARGAR PRODUCTOS DEL SERVIDOR
  // const cargarProductosServidor = () => {
  //   const db = getFirestore();

  //   if (category) {
  //     const filterItems = query(
  //       collection(db, "luminarias"),
  //       where("categoria", "==", category)
  //     );
  //     getDocs(filterItems).then((snapshot) => {
  //       const documentos = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setServerData(documentos);
  //       setCargando(false);
  //     });
  //   } else {
  //     const itemsCollection = collection(db, "luminarias");
  //     getDocs(itemsCollection).then((snapshot) => {
  //       const documentos = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setServerData(documentos);
  //       setCargando(false);
  //     });
  //   }
  // };

  return (
    <section className="main">
      {cargando ? <Loading /> : <ItemList listaProductos={serverData} />}
      {/* <Busqueda serverData={serverData} setServerData={setServerData} cargarProductosServidor={cargarProductosServidor} /> */}
    </section>
  );
};

export default ItemListContainer;
