import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout/Layout'
import EstadosFinancieros from '../../components/sobreNosotros/EstadosFinancieros'
import PoliticasItem from '../../components/sobreNosotros/PoliticasItem'
import { ICON__PROTECCION_DATOS } from '../../directories/images'

const SobreNosotrosViewPublic = () => {
    const mision = useSelector(state => state.mision)
    const vision = useSelector(state => state.vision)
    const {politicas} = useSelector(state => state.politicas)
    const {estadosFinancieros} = useSelector(state => state.estadosFinancieros)
    const proteccionDatos = useSelector(state => state.proteccionDatos)
    return (
        <Layout title='Sobre Nosotros'>
            <section className="sobre-nosotros">
                <div className="contenedor">
                    <h2 className="titulo">Sobre nosotros</h2>
                    <div className="mision">
                        <h3 className="subtitulo">Misión</h3>
                        <p> {mision.descripcion} </p>
                    </div>
                    <div className="vision">
                        <h3 className="subtitulo">Visión</h3>
                        <p> {vision.descripcion} </p>
                    </div>
                    <div className="valores__corporativos">
                        <h3 className="subtitulo">Valores Corporativos</h3>
                        <figure className="img">
                            <div className='img__item'></div>

                        </figure>
                        <div className="texto">
                            <h4> </h4>
                            <p> </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="politicas">
            <div className="contenedor">
                <h2 className="titulo">Politicas</h2>
                {
                    politicas?.map((politica, index) => (
                        <PoliticasItem
                            key={index}
                            nameClass={politica.nameClass}
                            subTitle={politica.title}
                            parrafo={politica.descripcion}
                        />
                    ))
                }
            </div>
        </section>
        
        <section className="estados__financieros">
            <div className="contenedor">
                <h2 className="titulo">Estados Financieros</h2>
                {
                    estadosFinancieros?.map((estado, index) => (
                        <EstadosFinancieros
                            key={index}
                            indice={index+1}
                            anio={estado.anio}
                        />
                    ))
                }
            </div>
        </section>
        <section className="proteccion_datos">
            <div className="contenedor">
                <h2 className="titulo">Protección de datos</h2>
                <div className="contenido">
                    <img src={ICON__PROTECCION_DATOS} alt="Icono" />
                    <div className="cont">
                        <p> {proteccionDatos.descripcion} </p>
                        <a href={proteccionDatos.link} target='_blank' rel="noreferrer">Documento</a>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    )
}

export default SobreNosotrosViewPublic
