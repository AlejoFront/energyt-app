import React from 'react'

const InnovacionItem = ({img, indice}) => {
    return (
        <div class="galeria__innova__item">
            <img class="galeria__img" src={img} alt="" />
            <h2 class="galeria__title">Imagen {indice}</h2>
        </div>
    )
}

export default InnovacionItem
