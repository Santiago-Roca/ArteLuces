import React, { useContext, useState } from 'react'
import { cartContext } from '../context/StateComponent'

const Login = () => {

    const [form, setForm] = useState({})
    const { setUser, user } = useContext(cartContext)

    //Obtener datos formulario con e.target
    const getData = (e) => {
        e.preventDefault()
        let user = {
            userName: e.target.userName.value,
            name: e.target.name.value,
            email: e.target.email.value
        }
        localStorage.setItem("user", JSON.stringify(user))
        setUser(user)
    }

    //Conseguir datos del formulario con formData()
    const getDataForm = (e) => {
        e.preventDefault()

        const data = new FormData(e.target)
        const obj = {}
        data.forEach((value, key) => {
            (obj[key] = value)
        })
        setForm(obj)
        setUser(obj)
    }

    const changing = ({ target }) => {
        const { name, value } = target
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <>
            <h1>Identificate</h1>
            <form onSubmit={getDataForm}>
                <input type="text" name='userName' placeholder='User' onChange={changing} />
                <input type="text" name='name' placeholder='Nombre' onChange={changing} />
                <input type="email" name='email' placeholder='Email' onChange={changing} />
                <input type="submit" value={"Ingresar"} />
            </form>
            <br />
            <h3>Datos ingresados</h3>
            <p>{JSON.stringify(form)}</p>
            <p>{form.name}</p>
        </>
    )
}

export default Login