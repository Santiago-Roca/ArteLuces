import React, { useContext } from 'react'
import { cartContext } from '../context/StateComponent'

import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const LoginWidget = () => {

    const { user, setUser } = useContext(cartContext)

    return (
        <div className='d-flex'>
            {user.name ? (
                <>
                    <div className="d-flex icon-box">
                        <span className="material-symbols-outlined icon-login">person_check</span>
                    </div>
                    <div className="d-flex icon-box">{user.userName} </div>
                    <div onClick={e => {
                        e.preventDefault()
                        setUser({})
                    }} className="d-flex icon-box enlace">Cerrar Sesión</div>
                </>
            ) :
                (<Nav.Link as={Link} to="/ArteLuces">
                    <div className='d-flex'>
                        <span className="material-symbols-outlined icon-login">person</span>
                    </div>
                </Nav.Link>)}
        </div>
    )
}

export default LoginWidget