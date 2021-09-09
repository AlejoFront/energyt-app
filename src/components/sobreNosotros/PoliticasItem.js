import React from 'react'
import ReactHtmlParser from 'react-html-parser'
const PoliticasItem = ({nameClass, subTitle, parrafo}) => {
    return (
        <div className={nameClass}>
            <h3 className="subtitulo">{subTitle}</h3>
            <article>{ReactHtmlParser(parrafo)}</article>
        </div>

    )
}

export default PoliticasItem
