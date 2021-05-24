import React from 'react';
import '../styles/Resultados.css'
import data from '../data';
import ResultadoCandidato from './ResultadoCandidato';
import BarChart from '../graphics/BarChart'

export default function Resultados() {
    const candidatos = data.candidatos;

    let apellidos = []
    candidatos.map(candidato => (apellidos.push(candidato.apellido)))

    let votos = []
    candidatos.map(candidato => (votos.push(parseInt(candidato.votos))))

    return (
        <div className="container">
            <div className="container__graficos">
                <BarChart apellidos={apellidos} votos={votos}></BarChart>
            </div>
            <div className="container__info">
                {candidatos.map(candidato => (
                    <ResultadoCandidato key={candidato.id} candidato={candidato}></ResultadoCandidato>               
                ))}
            </div>   
        </div>
    )
}