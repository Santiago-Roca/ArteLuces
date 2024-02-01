import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Error = () => {

    const redireccion = useNavigate()
    useEffect (()=>{
        setTimeout(()=>{
            redireccion("/")
        },2500)
    },[])

    const redireccionar = () => {
        setTimeout(() => {
            // window.location = "./";
            // window.location = "/";
            redireccion("/")
            // <Navigate to={"./"} />
        }, 2500)
    }
    // const redireccionURLar = () => {
    //     setTimeout(() => {
    //         window.location = "./";
    //     }, 2500)
    // }

    return (
        <>
            <h1>Error 404</h1>
            <p>La página seleccionada no existe!</p>
            {/* {redireccionar()} */}
        </>
    )
}

export default Error