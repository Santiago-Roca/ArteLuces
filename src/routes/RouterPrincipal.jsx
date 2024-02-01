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
                    <Route exact path="/" element={<ItemListContainer />} />
                    <Route exact path="/inicio" element={<Inicio />} />
                    <Route exact path="/:category/:category" element={<ItemListContainer />} />
                    <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route path='*' element={<Error />} />
                    <Route path='/persona/' element={<Persona />} />
                    <Route path='/persona/:nombre' element={<Persona />} />
                    <Route path='/persona/:nombre/:apellido' element={<Persona />} />
                    <Route path='/redirigir' element={<Navigate to="/persona/santiago" />} />

                    <Route path='/login' element={<Login />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </StateComponent>
    )
}

export default RouterPrincipal
