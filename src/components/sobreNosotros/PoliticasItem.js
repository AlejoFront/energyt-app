import React from 'react'

const PoliticasItem = ({nameClass, subTitle, parrafo}) => {
    return (
        <div className={nameClass}>
            <h3 className="subtitulo">{subTitle}</h3>
            <p>{parrafo}</p>
        </div>

    )
}

export default PoliticasItem
