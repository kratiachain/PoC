import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '../../styles/ExitoProcesarVoto.css'

export default function ExitoProcesarVoto() {
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-head modal-head_exito">
                    <div className="success-icon"><FontAwesomeIcon id="check" icon={faCheck} size="3x"/></div>
                </div>
                <div className="modal-content modal-content_exito">
                    <h1>Su voto ha sido registrado con éxito</h1>
                    <h2>¡Felicitaciones!</h2>
                </div>
                <div id="modal-buttons_exito" className="modal-buttons">
                    <a id="btn-aceptar" className="btn-modal btn-confirmar" href="/Home">Aceptar</a>
                </div>
            </div>
        </div>
    )
}