import React, { useContext, useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cart from "./components/Cart";
// import Footer from "./components/Footer";
// import Inicio from "./components/Inicio";
// import ItemDetailContainer from "./components/ItemDetailContainer";
// import ItemListContainer from "./components/ItemListContainer";
// import NavBar from "./components/NavBar";
// import StateComponent from "./context/StateComponent";
import RouterPrincipal from "./routes/RouterPrincipal";
import { cartContext } from "./context/StateComponent";

const App = () => {

  // // const {perro} = useContext(cartContext)
  // const [user, setUser] = useState({})

  // // console.log(perro)



  // useEffect (()=>{
  //   const user = JSON.parse(localStorage.getItem("user"))
  //   console.log("HOLA " + user.name)
  //   // console.log(user)
  //   setUser(user)
  // }, [])

  // const context = useContext(cartContext)
  // // console.log(context.cargando)
  // console.log(context)

  return (
    <RouterPrincipal />
    // <StateComponent>
    //   <BrowserRouter>
    //     <NavBar />

    //     <Routes>
    //       <Route exact path="/" element={<ItemListContainer />} />
    //       <Route exact path="/inicio" element={<Inicio />} />
    //       <Route exact path="/:category/:category" element={<ItemListContainer />} />
    //       <Route exact path="/item/:id" element={<ItemDetailContainer />} />
    //       <Route exact path="/cart" element={<Cart />} />
    //     </Routes>

    //     <Footer />
    //   </BrowserRouter>
    // </StateComponent>
  );
};

export default App;