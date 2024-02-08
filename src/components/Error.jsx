import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

    const redireccion = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            redireccion("/")
        }, 2500)
    }, [])

    const redireccionar = () => {
        setTimeout(() => {
            redireccion("/")
        }, 2500)
    }

    return (
        <>
            <h1>Error 404</h1>
            <p>La página seleccionada no existe!</p>
        </>
    )
}

export default Error