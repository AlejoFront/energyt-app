import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../../components/layout/Dashboard'
import AddProject from '../../components/projects/AddProject'
import ProjectItem from '../../components/projects/ProjectItem'

const ProyectosViewPrivate = () => {
    const {projects} = useSelector(state => state.projects)
    return (
        <Dashboard>
            <div className='dashboard__cont'>
                <h2 className='titulo' >Proyectos</h2>
                <div className='controls'>
                    <div className='container__projects'>
                        <AddProject />
                        {
                            projects.map((project, index) => (
                                <ProjectItem 
                                        key={index}
                                        img={project.img}
                                        id={project.id}
                                        title={project.nombre}
                                        descripcion_corta={project.descripcion_corta}
                                        descripcion_larga={project.descripcion_larga}
                                />
                            ))
                        }
                   </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default ProyectosViewPrivate
