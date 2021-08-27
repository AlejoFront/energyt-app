import React from 'react'

const ModalProject = ({img,nombre, descripcion, indice}) => {
    return (
        <section className="modal" id={`target${indice}`}>
            <div className="modal__container">
                <a href="#projects" className="modal__close">X</a>
                <img src={img} alt="Img" className="modal__img" />
                <div className="modal__texts">
                    <h2 className="modal__title">{nombre}</h2>
                    <p className="modal__paragraph">{descripcion}</p>
                    
                </div>
            </div>
        </section>

        
    )
}

export default ModalProject
