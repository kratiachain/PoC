import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../../styles/ErrorProcesarVoto.css'

export default function ErrorProcesarVoto() {
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-head_error modal-head">
                    <div className="error-icon"><FontAwesomeIcon id="exclamation" icon={faTimes} size="2x"/></div>
                </div>
                <div className="modal-content modal-content_error">
                    <h1>Se ha producido un error</h1>
                    <h2>Por favor, intente de nuevo.</h2>
                </div>
                <div id="modal-buttons_error" className="modal-buttons">
                    <a id="btn-reintentar" className="btn-modal btn-cancelar" href="/Home/Votacion">Aceptar</a>
                </div>
            </div>
        </div>
    )
}