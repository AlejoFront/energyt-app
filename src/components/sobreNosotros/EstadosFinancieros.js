import React from 'react'
import { ICON__ESTADOS_FINANCIEROS } from '../../directories/images'

const EstadosFinancieros = ({indice,anio}) => {
    return (
        <div class={`estado__item card${indice}`}>
            <a href="#a" >
                <img src={ICON__ESTADOS_FINANCIEROS} alt="logo estado" />
                <span>Año {anio}</span>
            </a>
        </div>
    )
}

export default EstadosFinancieros
