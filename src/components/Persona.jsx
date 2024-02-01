import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Persona = () => {

    let { nombre, apellido } = useParams()

    const navegar = useNavigate()

    const enviar = (e) => {
        e.preventDefault()
        let nombre = e.target.nombre.value
        let apellido = e.target.apellido.value
        let url = `/persona/${nombre}/${apellido}`

        if (nombre.length == 0 && apellido.length == 0) {
            navegar("/")
        } else {
            navegar(url)
        }

    }

    return (
        <>
            {!nombre ? (
                <h1>No hay ninguna persona registrada</h1>
            ) : (
                <h1>Hola {nombre} {apellido}</h1>
            )}

            <form onSubmit={enviar}>
                <input type="text" name='nombre' placeholder='nombre' />
                <input type="text" name='apellido' placeholder='apellido' />
                <input type="submit" name='enviar' value="enviar" />
            </form>
        </>
    )
}

export default Persona