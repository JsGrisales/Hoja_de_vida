import React from "react";
import BtnCertifications from './components/BtnCertifications';
import Aside from './components/Aside.js';
import { ExpLaboral } from "./components/ExpLaboral";
import { Formacion } from "./components/Formacion";
import { Separator } from "./components/Separator";



export default function Curriculum() {
    return (
        <>
            <Aside />
            <section className="section">
                <h1>Johan Sebastián Grisales Grisales</h1>
                <BtnCertifications />
                <Separator/>
                <div className="perfil_profesional">
                <h2>PERFIL PROFESIONAL</h2>
                <span>
                    Soy un desarrollador web que conoce herramientas como Bubble, HTML, CSS, JS, React, GIT-GitHub y bases de datos SQL. <br /><br />

                    ¿Qué me caracteriza por sobre el resto?<br />
                    La dedicación, la adaptación, la empatía y la rápida resolución de problemas, tener facilidad de integrarme en equipos
                    de desarrollo y crear un ambiente de trabajo agradable. Me define el ser creativo y tratar siempre de tener algo que aportar.
                    Estar abierto al diálogo en situaciones de conflicto y siempre creer en mi mismo, así como en el valor de mis compañeros.<br /><br />

                    Un poco sobre mi educación y experiencia.<br />
                    Comencé estudiando por mi cuenta en plataformas como Udemy y Youtube, luego hice un diplomado en programación con MinTic, seguido a ese
                    hice un diplomado en diseño web y social media en ABS, actualmente me encuentro en el centro de innovación colombiano (CINCO) trabajando
                    en un proyecto llamado Go-Travel.<br />
                </span>
            </div>
            <Separator/>
                <div className="container-form-exp">
                    <ExpLaboral />
                    <Formacion />
                </div>
            </section>
        </>
    )
}