import React from 'react';
import fondo from "../Assets/fondo.jpg";
import github from "../Assets/Icons/github.png";
import linkedin from "../Assets/Icons/linkedin.png";
import '../styles/Aside.scss'
import PDFDownloadButton from './PDFDownloadButton';
import { useTranslation } from "react-i18next";

export default function Aside() {
    const { t } = useTranslation()
    return (
        <>
            <aside className="aside">
            
                <div className="img">
                    <img src={fondo} alt="fondo" />
                </div>
                <div className="informacion_contacto">
                <h3>{t('curriculum.contacto')}</h3>
                    <ul>
                        <li>
                            <b>{t('curriculum.WhatsApp')}</b> (+57)3242513097
                        </li>
                        <li>
                            <b>{t('curriculum.Correo')}</b> js.grisales03@gmail.com
                        </li>
                        <li>
                            <b>{t('curriculum.Redes')}:</b>
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
                    <h3>{t('curriculum.FECHA/LUGAR DE NACIMIENTO')}</h3>
                    <ul>
                        <li>{t('curriculum.13 de Marzo de 1995')}</li>
                        <li>{t('curriculum.Pereira')}</li>
                    </ul>
                </div>
                <div>
                    <h3>{t('curriculum.NACIONALIDAD')}</h3>
                    <ul>
                        <li>{t('curriculum.Colombiano')}</li>
                    </ul>
                </div>
                
                <div>
                    <h3>{t('curriculum.COMPETENCIAS')}</h3>
                    <ul>
                        <li>{t('curriculum.Comunicación asertiva')}</li>
                        <li>{t('curriculum.Trabajo en equipo')}</li>
                        <li>{t('curriculum.Buenas relaciones sociales')}</li>
                        <li>{t('curriculum.Gran capacidad de aprender')}</li>
                        <li>{t('curriculum.Escucha activa')}</li>
                    </ul>
                </div>
                <div>
                    <h3>{t('curriculum.IDIOMAS')}</h3>
                    <ul>
                        <li>{t('curriculum.Español nativo/competencia profesional')}</li>
                        <li>{t('curriculum.Inglés B1')}</li>
                    </ul>
                </div>
                <div>
                    <h3>{t('curriculum.Licencia de conducción')}</h3>
                    <ul>
                        <li>{t('curriculum.Moto A2')}</li>
                        <li>{t('curriculum.Carro B1')}</li>
                    </ul>
                </div>
                <PDFDownloadButton/>
            </aside>
        </>
    )
}