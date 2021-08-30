import React from 'react'
import { ICON_QUE_HACEMOS } from '../../directories/images'

const QueHacemosItem = ({date}) => {
    return (
        <div className="card__item">
            <figure className="card__img">
                <img src={ICON_QUE_HACEMOS} alt='icono' className="card__picture" />
            </figure>
            <h3 className="card__title">{date.nombre}</h3>
            <p className="card__paragraph"> {date.descripcion} </p>
        </div>
    )
}

export default QueHacemosItem
