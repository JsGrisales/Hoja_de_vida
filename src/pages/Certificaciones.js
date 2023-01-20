import React from "react";
import BtnBack from '../components/BtnBack'
import gh from '../Assets/certificaciones/Grasshopper/Fundamentos de codificación.png';
import ghII from '../Assets/certificaciones/Grasshopper/Fundamentos de codificación II.png';
import cs from '../Assets/certificaciones/habilidades_blandas/comunicacion asertiva.png';
import pv from '../Assets/certificaciones/habilidades_blandas/Encontrar tu proposito de vida.png';
import hplv from '../Assets/certificaciones/habilidades_blandas/HPLV.jpg';
import an from '../Assets/certificaciones/ingles/Adverbds and nouns.png';
import mv from '../Assets/certificaciones/ingles/articles and modal verbs.png';
import cos from '../Assets/certificaciones/ingles/conjunctions and superlativs.png';
import bubble from '../Assets/certificaciones/Programacion/Bubble I.png';
import bubbleII from '../Assets/certificaciones/Programacion/Bubble II.png';
import minTic from '../Assets/certificaciones/Programacion/MinTIC.png';
import ts from '../Assets/certificaciones/Programacion/Typescript.png';
import htmlCss from '../Assets/certificaciones/Udemy/HTML5&CSS3.png';
import html from '../Assets/certificaciones/Udemy/HTML5.jpg';
import '../styles/Certificaciones.scss'


export default function Certificaciones() {
    return (
        <>

            <div className="container_certificacion">
                <BtnBack></BtnBack>
                <h1>CERTIFICACIONES</h1>
                <div className="parent">
                    <div className="div1">
                        <h2>Inglés</h2>
                        <div className="card">
                            <p><span><img className="img-cert" src={an} alt="an" /></span></p>
                            <p><span><img className="img-cert" src={mv} alt="mv" /></span></p>
                            <p><span><img className="img-cert" src={cos} alt="cos" /></span></p>
                        </div>
                    </div>
                    <div className="div2">
                        <h2>Udemy</h2>
                        <div className="card">
                            <p><span><img className="img-cert" src={htmlCss} alt="htmlCss" /></span></p>
                            <p><span><img className="img-cert" src={html} alt="html" /></span></p>
                        </div> </div>
                    <div className="div3">
                        <h2>GrassHopper</h2>
                        <div className="card">
                            <p><span><img className="img-cert" src={gh} alt="gh" /></span></p>
                            <p><span><img className="img-cert" src={ghII} alt="ghII" /></span></p>
                        </div> </div>
                    <div className="div4">
                        <h2>Programación</h2>
                        <div className="card">
                            <p><span><img className="img-cert" src={ts} alt="ts" /></span></p>
                            <p><span><img className="img-cert" src={minTic} alt="minTic" /></span></p>
                        </div> </div>
                    <div className="div5">
                        <h2>Bubble.io</h2>
                        <div className="card">
                            <p><span><img className="img-cert" src={bubble} alt="bubble" /></span></p>
                            <p><span><img className="img-cert" src={bubbleII} alt="bubbleII" /></span></p>
                        </div></div>
                    <div className="div6">
                        <h2>Habilidades blandas
                        </h2>
                        <div className="card">
                            <p><span><img className="img-cert" src={cs} alt="cs" /></span></p>
                            <p><span><img className="img-cert" src={pv} alt="pv" /></span></p>
                            <p><span><img className="img-cert" src={hplv} alt="hplv" /></span></p>
                        </div> </div>
                </div>
            </div>

        </>

    )
}