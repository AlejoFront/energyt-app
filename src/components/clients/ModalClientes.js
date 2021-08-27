import React from 'react'
const ModalClientes = ({indice}) => {

    return (
        <section className="show" id={`showImg${indice+1}`}>
            <div className={`show__container show--n${indice+1}`}>
                <a href="#nuestros-clientes" className="show__close">X</a>
            </div>
        </section>
    )
}

export default ModalClientes
