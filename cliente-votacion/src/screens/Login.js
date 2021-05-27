import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import '../styles/Login.css';

export default function Login(props) {
    const [nombre, setNombre] = useState("");
    const [dni, setDNI] = useState("");
    const [contraseña, setContraseña] = useState("");

    // Obtiene el usuario logueado desde la store
    const usuarioLogueado = useSelector((state) => state.userLogin)
    const { userInfo, error } = usuarioLogueado;

    const dispatch = useDispatch();
    // Dispara la accion login de las user actions
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(nombre, dni, contraseña));
    };
    useEffect(() => {
        if(userInfo) {
            props.history.push('/Home');
        }
    }, [props.history, userInfo]);
    return (
        <div className="login">
            <div className="login__titulo">
                <h1>Sign in to Kratia</h1>
            </div>
            <div className="login__container">
                <form className="login__container__form" onSubmit={submitHandler}>
                    <input 
                        id="input_nombre"
                        type="text" 
                        required
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <span id="span_nombre">Usuario</span>
                    <input 
                        id="input_dni"
                        type="number"
                        required  
                        value={dni} 
                        onChange={(e) => setDNI(e.target.value)}
                    />
                    <span id="span_dni">DNI</span>
                    <input 
                        id="input_contraseña"
                        type="password" 
                        required
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                    />
                    <span id="span_contraseña">Contraseña</span>
                    {error && <span id="mensaje-error">{error}</span>}
                    <button type="submit" className="submit__btn">Ingresar</button>
                </form>
            </div>
        </div>
    )
}