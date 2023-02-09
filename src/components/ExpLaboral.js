import React from 'react'
import { useTranslation } from "react-i18next";
import '../styles/ExpLaboral.scss'

export const ExpLaboral = () => {
    const { t } = useTranslation()
    return (
        <>
            
            <div className="experiencia_laboral">
                <h2>{t('curriculum.experiencia-laboral')}</h2>
                <ul>
                    <li>
                    <li>
                        <h3>{t('curriculum.desarrollador-bubble.io')}</h3>
                        <p>{t('curriculum.db-fecha')}</p>
                        <p>{t('curriculum.db-lugar')}</p>
                        <p>{t('curriculum.db-proyecto')}</p>
                    </li>
                    <li>
                        <h3>{t('curriculum.dd-Docente')}</h3>
                        <p>{t('curriculum.dd-fecha')}</p>
                        <p>{t('curriculum.dd-lugar')}</p>
                    </li>
                        <h3>{t('curriculum.s-rgis')}</h3>
                        <p>{t('curriculum.s-fecha')}</p>
                        <p>{t('curriculum.s-lugar')}</p>
                    </li>
                    
                    
                </ul>
            </div>

        </>
    )
}
