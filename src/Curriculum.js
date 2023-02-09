import React from "react";
import BtnCertifications from './components/BtnCertifications';
import Aside from './components/Aside.js';
import Skills from "./components/Skills";
import './styles/BtnLan.scss'
import { ExpLaboral } from "./components/ExpLaboral";
import { Formacion } from "./components/Formacion";
import { Separator } from "./components/Separator";
import { useTranslation } from "react-i18next";


export default function Curriculum() {
    const { t, i18n } = useTranslation()

    return (
        <>
            

            
            
            <section 
            className="section">
                <button className="btnLan" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
                    {i18n.t('curriculum.btnlan')}
                </button>
                <h1>Sebastián Grisales</h1>
                <BtnCertifications />
                <Separator />
                <div className="perfil_profesional">
                    <h2>{t("curriculum.professional-profile")}</h2>
                    <span>
                        {i18n.t(`curriculum.paragraph1`)}<br /><br />
                        {i18n.t(`curriculum.paragraphsubtitle1`)}<br />
                        {i18n.t(`curriculum.paragraph2`)}<br /><br />
                        {i18n.t(`curriculum.paragraphsubtitle2`)}<br />
                        {i18n.t(`curriculum.paragraph3`)}<br />
                    </span>
                </div>
                <Separator />
                <div className="container-form-exp">
                    <ExpLaboral />
                    <Formacion />
                    <Skills />
                    
                </div>
            </section>
            <Aside />
            
        </>
    )
}