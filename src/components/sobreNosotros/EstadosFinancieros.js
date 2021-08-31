import React from 'react'
import { ICON__ESTADOS_FINANCIEROS } from '../../directories/images'

const EstadosFinancieros = ({indice,anio, link}) => {
    return (
        <div className={`estado__item card${indice}`}>
            <a href={link} >
                <img src={ICON__ESTADOS_FINANCIEROS} alt="logo estado" />
                <span>Año {anio}</span>
            </a>
        </div>
    )
}

export default EstadosFinancieros
