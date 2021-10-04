import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const ItemValores = ({data}) => {
    const {titulo, descripcion, img} = data;
    return (
        <div className='picture'>
           <img src={img} alt='valor' className='imagen_valor' />
            <figcaption className="picture__container">
                <div className='texto'>
                    <h4>{titulo}</h4>
                    <article>
                        {ReactHtmlParser(descripcion)}
                    </article>
                </div> 
            </figcaption>
        </div>
    )
}

export default ItemValores