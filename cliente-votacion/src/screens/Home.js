import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/Home.css'
import NavBar from '../components/NavBar'
import Resultados from '../components/Resultados'
import Votacion from '../components/Votacion'

export default function Home() {
    return (
        <div className="grid-container">
            <header><NavBar></NavBar></header>
            <main>
                <BrowserRouter>
                    <Route path="/Home/Votacion" component={Votacion}></Route>
                    <Route path="/Home/Resultados" component={Resultados}></Route>
                </BrowserRouter>
            </main>
            <footer>Copyright © Kratia - All rights reserved</footer>
        </div>
    )
}

