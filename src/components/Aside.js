import React from 'react';
import fondo from "../Assets/fondo.jpg";
import github from "../Assets/Icons/github.png";
import linkedin from "../Assets/Icons/linkedin.png";
import '../styles/Aside.scss'

export default function Aside() {
    return (
        <>
            <aside className="aside">
                <div className="img">
                    <img src={fondo} alt="fondo" />
                </div>
                <div className="informacion_contacto">
                <h3>CONTACTO</h3>
                    <ul>
                        <li>
                            <b>WhatsApp:</b> (+57)3242513097
                        </li>
                        <li>
                            <b>Email:</b> js.grisales03@gmail.com
                        </li>
                        <li>
                            <b>Redes:</b>
                            <div className="container_redes">
                                <ul className="lista_redes">
                                    <li>
                                        <a href="https://github.com/JsGrisales">
                                            <img src={github} alt="GitHub" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/johan-sebasti%C3%A1n-grisales-grisales-58533a22a/">
                                            <img src={linkedin} alt="LinkedIn" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>FECHA/LUGAR DE NACIMIENTO</h3>
                    <ul>
                        <li>13 de Marzo de 1995</li>
                        <li>Pereira</li>
                    </ul>
                </div>
                <div>
                    <h3>NACIONALIDAD</h3>
                    <ul>
                        <li>Colombiano</li>
                    </ul>
                </div>
                
                <div>
                    <h3>COMPETENCIAS</h3>
                    <ul>
                        <li>Comunicación asertiva</li>
                        <li>Trabajo en equipo</li>
                        <li>Buenas relaciones sociales</li>
                        <li>Gran capacidad de aprender</li>
                        <li>Escucha activa</li>
                    </ul>
                </div>
                <div>
                    <h3>IDIOMAS</h3>
                    <ul>
                        <li>Español nativo/competencia profesional</li>
                        <li>Inglés B1</li>
                    </ul>
                </div>
                <div>
                    <h3>Licencia de conducción</h3>
                    <ul>
                        <li>Moto A2</li>
                        <li>Carro B1</li>
                    </ul>
                </div>
            </aside>
        </>
    )
}