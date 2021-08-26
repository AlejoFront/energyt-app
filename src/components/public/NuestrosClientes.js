import React from 'react'
import { ICON__CLIENTS_SUBLOGO } from '../../directories/images'

const NuestrosClientes = ({client}) => {
    return (
        <div className="imagen-port">
            <img src={client.img_url} alt="logo" />
            <a className="hover-galeria" href="#showImg1">
                <img src={ICON__CLIENTS_SUBLOGO} alt="sublogo"/>
                <p>{client.nombre}</p>
            </a>
        </div>
    )
}

export default NuestrosClientes
