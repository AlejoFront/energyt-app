import React from 'react'
import ModalProject from './ModalProject'

const ProjectsItem = ({project, indice}) => {
    return (
        <>
        <div className="project__item">
            <figure>
                <img src={project.img} alt='Foto' className="card__picture" />
            </figure>
            <h3 className="project_title">{project.nombre}</h3>
            <p className="project__paragraph">{project.descripcion_corta}</p>
            <a className="btn btn-info" href={`#target${indice+1}`}>Ver Más</a>
        </div>
            <ModalProject 
                img={project.img}
                indice={indice+1}
                nombre={project.nombre}
                descripcion={project.descripcion_larga}
            />
        </>
    )
}

export default ProjectsItem
