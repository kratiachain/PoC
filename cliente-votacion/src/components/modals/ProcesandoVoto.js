import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import '../../styles/ProcesandoVotos.css'

export default function ProcesandoVoto() {
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-head"><p>Procesando voto</p><FontAwesomeIcon id="icono-advertencia" icon={faPaperPlane} size="2x" pull="left"/></div>
                <div id="content-procesando" className="modal-content">
                    <h1>Su voto se esta procesando</h1>
                </div>
                <div className="modal-loader">
                    <div className="loader-item"></div>
                    <div className="loader-item"></div> 
                    <div className="loader-item"></div>
                    <div className="loader-item"></div>
                    <div className="loader-item"></div>
                </div>
            </div>
        </div>
    )
}