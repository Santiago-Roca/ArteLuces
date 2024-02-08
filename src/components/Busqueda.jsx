import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { cartContext } from "../context/StateComponent";

const Busqueda = () => {

    //USE STATE
    const [busqueda, setBusqueda] = useState("")
    const [noEncontrado, setNoEncontrado] = useState(false)
    const {serverData, setServerData, cargarProductosServidor} = useContext(cartContext)

    //SEARCH MOVIE
    const searchMovie = (e) => {
        setBusqueda(e.target.value)
        let result = serverData.filter(item => {
            return item.nombre.toLowerCase().includes(busqueda.toLowerCase())
        })

        setServerData(result)

        if (busqueda.length <= 2 || result <= 0) {
            cargarProductosServidor()
            setNoEncontrado(true)
        } else {
            setNoEncontrado(false)
        }
    }

    return (
        <>
            <Form.Control
                type="search"
                name="searchInput"
                onChange={searchMovie}
                autoComplete="off"
                placeholder="Buscar un producto"
                className="me-2 buscar-nav"
                aria-label="Search"
            />
            <Button className="btn-buscar me-3" variant="dark">
                Buscar
            </Button>
            <span>{(noEncontrado && busqueda.length > 2) && ("No hay ninguna coincidencia")}</span>
        </>
    )
}

export default Busqueda