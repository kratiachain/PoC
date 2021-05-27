import React from 'react';
import '../styles/ResultadoCandidato.css'

export default function ResultadoCandidato(props) {
    const {candidato} = props;
    return (
        <div className="card_resultado">
            <div className="card_resultado__imagen">
                <img src={candidato.img} alt={candidato.apellido}></img>
            </div>
            <div className="card_resultado__info">
                <div className="datos_candidato">
                    <h1 className="lista">{candidato.lista}</h1>
                    <h2 className="nombre">{candidato.nombre} {candidato.apellido}</h2>
                </div>
                <div className="info_votos">
                    <h1 className="porcentaje">{candidato.porcentaje}%</h1>
                    <h2 className="votos">{candidato.votos} votos</h2>
                </div>    
            </div>
        </div>
    )
}