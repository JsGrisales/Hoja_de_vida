import React from "react";
import BtnCertifications from './components/BtnCertifications';
import Aside from './components/Aside.js';



export default function Curriculum() {
    return (
        <>
            <Aside />
            <section className="section">
                <h1>Johan Sebastián Grisales Grisales</h1>
                <BtnCertifications />

                <div className="perfil_profesional">
                    <h2>PERFIL PROFESIONAL</h2>
                    <span>
                        Soy un desarrollador web que conoce herramientas como Bubble, HTML, CSS, JS, React, GIT-GitHub y bases de datos SQL. <br/><br/>

                        ¿Qué me caracteriza por sobre el resto?<br/>
                        La dedicación, la adaptación, la empatía y la rápida resolución de problemas, tener facilidad de integrarme en equipos 
                        de desarrollo y crear un ambiente de trabajo agradable. Me define el ser creativo y tratar siempre de tener algo que aportar.
                        Estar abierto al diálogo en situaciones de conflicto y siempre creer en mi mismo, así como en el valor de mis compañeros.<br/><br/>

                        Un poco sobre mi educación y experiencia.<br/>
                        Comencé estudiando por mi cuenta en plataformas como Udemy y Youtube, luego hice un diplomado en programación con MinTic, seguido a ese
                        hice un diplomado en diseño web y social media en ABS, actualmente me encuentro en el centro de innovación colombiano (CINCO) trabajando
                        en un proyecto llamado Go-Travel.<br/>
                    </span>
                </div>
                <div className="experiencia_laboral">
                    <h2>EXPERIENCIA LABORAL</h2>
                    <ul>
                        <li>
                            <h3>Supervisor, RGIS, Pereira</h3>
                            <p>Desde Enero del 2015 hasta Diciembre de 2016</p>
                            <p>Empresa: RGIS</p>
                        </li>
                        <li>
                            <h3>Docente, Dosquebradas</h3>
                            <p>Desde junio del 2016 hasta junio de 2022</p>
                            <p>Empresa: Liceo católico Brisa María</p>
                        </li>
                        <li>
                            <h3>Desarrollador Bubble.io</h3>
                            <p>Desde mayo del 2022 hasta la actualidad</p>
                            <p>Empresa: Centro de inovación Colombiano (CINCO)</p>
                            <p>Proyecto: Go-Travel</p>
                        </li>
                    </ul>
                </div>
                <div className="formacion">
                    <h2>FORMACIÓN</h2>
                    <ul>
                        <li>
                            <h3>Licenciado en música</h3>
                            <p>Enero 2013 - Abril 2019</p>
                            <p>Universidad Tecnológica de Pereira</p>
                        </li>
                        <li>
                            <h3>Diplomado en programación</h3>
                            <p>Marzo 2021 - noviembre 2021</p>
                            <p>MinTic</p>
                        </li>
                        <li>
                            <h3>Diseño web y social media</h3>
                            <p>febrero del 2022 - junio del 2022</p>
                            <p>American bussines school</p>
                        </li>
                    </ul>
                </div>

            </section>
        </>
    )
}