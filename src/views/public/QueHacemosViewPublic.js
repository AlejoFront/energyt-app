import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout/Layout'
//import ModalProject from '../../components/queHacemos/ModalProject'
import ProjectsItem from '../../components/queHacemos/ProjectsItem'
import QueHacemosItem from '../../components/queHacemos/QueHacemosItem'

const QueHacemosViewPublic = () => {
    const {queHacemos} = useSelector(state => state.queHacemos);
    const {projects} = useSelector(state => state.projects)
    return (
        <Layout title='¿Que Hacemos?'>
            <section className="que__hacemos">
                <div className="contenedor">
                    <h2 className="titulo">¿Que Hacemos?</h2>
                    <div className="card__container">
                        {
                            queHacemos.map((date, index) => (
                                <QueHacemosItem 
                                    key={index}
                                    date={date}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="projects" id="projects">
                <div className="contenedor">
                    <h2 className="titulo">Algunos Proyectos</h2>
                    <div className="contenedor-projects">
                        {
                            projects.map((project, index) => (
                                <ProjectsItem
                                    key={index}
                                    indice={index}
                                    project={project}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default QueHacemosViewPublic
