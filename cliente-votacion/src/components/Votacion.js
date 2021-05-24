import React from 'react';
import '../styles/Votacion.css'
import Candidato from './Candidato'
import data from '../data'
import { useSelector } from 'react-redux';
import ProcesandoVoto from './modals/ProcesandoVoto';
import ErrorProcesarVoto from './modals/ErrorProcesarVoto';
import ConfirmacionVoto from './modals/ConfirmacionVoto';
import ExitoProcesarVoto from './modals/ExitoProcesarVoto';

export default function Votacion() {
    const candidatos = data.candidatos
    
    const voteRequestState = useSelector((state) => state.voteRequest)
    const { esperandoConfirmacion, procesando, success, error } = voteRequestState

    return (
        <div>
            <div className="container">
                {candidatos.map(candidato => (
                    <Candidato key={candidato.id} candidato={candidato}></Candidato>
                ))}
            </div>
            {esperandoConfirmacion && <ConfirmacionVoto/>}
            {procesando && <ProcesandoVoto/>}
            {error && <ErrorProcesarVoto/>}
            {success && <ExitoProcesarVoto/>}
        </div>
    )
}