import React from 'react'
import { useTranslation } from "react-i18next";
import '../styles/Formacion.scss'

export const Formacion = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="formacion">
                <h2>{t('curriculum.formacion')}</h2>
                <ul>
                    <li>
                        <h3>{t('curriculum.Diseño web y social media')}</h3>
                        <p>{t('curriculum.dwsm-fecha')}</p>
                        <p>{t('curriculum.dwsm-lugar')}</p>
                    </li>
                    <li>
                        <h3>{t('curriculum.Diplomado en programacion')}</h3>
                        <p>{t('curriculum.dp-fecha')}</p>
                        <p>{t('curriculum.dp-lugar')}</p>
                    </li>
                    <li>
                        <h3>{t('curriculum.Licenciado en musica')}</h3>
                        <p>{t('curriculum.lm-fecha')}</p>
                        <p>{t('curriculum.lm-lugar')}</p>
                    </li>
                </ul>
            </div>
        </>
    )
}
