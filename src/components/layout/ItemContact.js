import React from 'react'
import { P } from '../../elements/FooterElements'

const ItemContact = ({title, descripcion, nameClass}) => {
    return (
        <div className="content-foo">
            <h4>{title}</h4>
            {
                nameClass === 'p-email'
                ? <P className={nameClass} descripcion={descripcion}> </P>
                : <p className={nameClass}>{descripcion}</p>
            }
            
        </div>
    )
}

export default ItemContact
