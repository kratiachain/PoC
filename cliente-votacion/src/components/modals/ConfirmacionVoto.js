import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { cancelarVoto, confirmarVoto } from '../../actions/voteActions';
import '../../styles/ConfirmacionVoto.css'

export default function ConfirmacionVoto() {
    const voteRequestState = useSelector((state) => state.voteRequest)
    const { candidato } = voteRequestState.candidato

    const dispatch = useDispatch();
    const solicitarConfirmarVoto = () => {
        //Se pasa por parametro el candidato completo
        //Para fines del PoC se pasa solo el nombre
        dispatch(confirmarVoto(candidato))
    }

    const solicitarCancelarVoto = () => {
        dispatch(cancelarVoto())
    }
    
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-head"><p>Confirmación de voto</p><FontAwesomeIcon id="icono-advertencia" icon={faExclamationTriangle} size="2x"/></div>
                <div className="modal-content">
                    <h1>Su voto será para {candidato.nombre} {candidato.apellido}</h1>
                    <h2>¿Esta seguro de su voto?</h2>
                </div>
                <div className="modal-buttons">
                    <button className="btn-modal btn-cancelar" onClick={solicitarCancelarVoto}>Cancelar</button>
                    <button className="btn-modal btn-confirmar" onClick={solicitarConfirmarVoto}>Confirmar</button>
                </div>
            </div>
        </div>
    )
}