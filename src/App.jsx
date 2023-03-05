import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Prueba from "./components/Prueba";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route
          exact
          path="/itemListContainer"
          element={<ItemListContainer greeting={"Bienvenidos a Mundo Movie"} />}
        />
        <Route exact path="/prueba/:id" element={<Prueba />} />
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
