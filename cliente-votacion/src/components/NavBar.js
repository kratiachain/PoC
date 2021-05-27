import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';
import '../styles/NavBar.css'

export default function NavBar() {

    //Obtiene el usuario logueado desde la store
    const usuarioLogueado = useSelector((state) => state.userLogin)
    const { userInfo } = usuarioLogueado;

    const dispatch = useDispatch();
    // Dispara la accion logout de las user actions
    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <div className="navbar">
            <div>
                <a href="/Home">Inicio</a>
                <a href="/Home/Votacion">Votación</a>
                <a href="/Home/Resultados">Resultados</a>
            </div>
            <div>
                {
                    userInfo ? (
                        <div>
                            <Link to="#">Hola Diego!</Link>
                            <Link to="/Login" onClick={logoutHandler}>Cerrar Sesion</Link>
                        </div>
                    ) : 
                    (
                        <Link to="/Login">Login</Link>
                    )
                } 
            </div>
        </div>
    )
}
//{userInfo.nombre}