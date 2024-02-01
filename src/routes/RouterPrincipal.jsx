import React from 'react'
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom'
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Inicio from "../components/Inicio";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import StateComponent from '../context/StateComponent';
import Error from '../components/Error';
import Persona from '../components/Persona';
import Login from '../components/Login';

const RouterPrincipal = () => {
    return (
        <StateComponent>
            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route exact path="/ArteLuces/" element={<ItemListContainer />} />
                    <Route exact path="/ArteLuces/inicio" element={<Inicio />} />
                    <Route exact path="/ArteLuces/:category/:category" element={<ItemListContainer />} />
                    <Route exact path="/ArteLuces/item/:id" element={<ItemDetailContainer />} />
                    <Route exact path="/ArteLuces/cart" element={<Cart />} />
                    <Route path='ArteLuces/*' element={<Error />} />
                    <Route path='/ArteLuces/persona/' element={<Persona />} />
                    <Route path='/ArteLuces/persona/:nombre' element={<Persona />} />
                    <Route path='/ArteLuces/persona/:nombre/:apellido' element={<Persona />} />
                    <Route path='/ArteLuces/redirigir' element={<Navigate to="/ArteLuces/persona/santiago" />} />

                    <Route path='/ArteLuces/login' element={<Login />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </StateComponent>
    )
}

export default RouterPrincipal
