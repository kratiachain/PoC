import React from 'react';
import { useDispatch } from 'react-redux';
import { solicitarVotar } from '../actions/voteActions';
import '../styles/Candidato.css';

export default function Candidato(props) {
    const {candidato} = props;

    const dispatch = useDispatch();
    const solicitarVoto = () => {
        dispatch(solicitarVotar(candidato))
    }

    return (
        <div className="card_candidato">
            <div className="imagen_candidato">
                <img src={candidato.img} alt={candidato.apellido}/>
            </div>
            <div className="info_candidato">
                <h2>{candidato.nombre} {candidato.apellido}</h2>
                <h3>{candidato.lista}</h3>
                <h3>{candidato.cargo}</h3>
            </div>
            <div className="btn_votar">
                <button className="btn" onClick={solicitarVoto}>Votar</button>
            </div>
        </div>
    )
}