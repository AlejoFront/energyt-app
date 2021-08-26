import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout/Layout'
import NuestrosClientes from '../../components/public/NuestrosClientes'
import { ICON__LOGO } from '../../directories/images'
const PrincipalViewPublic = () => {
    const {nuestrosClients} = useSelector(state => state.nuestrosClientes)
    return (
        <Layout title='Inicio'>
            <section className="contenedor acerca-de">
                <h2 className="titulo">Acerca de</h2>
                <div className="contenedor-acerca-de">
                    <img src={ICON__LOGO} alt="" className="imagen-about-us" />
                    <div className="contenido-textos">
                        <p> <b>ENERGYT <span>S.A.S</span></b>
                            es hoy una empresa prestadora de servicios, 
                            especializada en el desarrollo de grandes proyectos de redes eléctricas, 
                            creada el 2 de Marzo del 2016 bajo la necesidad de abastecer y 
                            suplir los requerimientos de la población tolimense, donde nuestra 
                            principal ventaja es ofrecer soluciones a problemas eléctricos que optimicen 
                            los requisitos reales de cada cliente de forma personalizada.
                            Trabajamos en todos los sectores y campos de actividad regional y nacional, 
                            habiendo gestionado con éxito proyectos en distintos lugares del Tolima.
                        </p>
                    </div>
                </div>
            </section>
            <section className="nuestros-clientes" id="nuestros-clientes">
            <div className="contenedor">
                <h2 className="titulo">Nuestros Clientes</h2>
                    <div className="galeria-clientes">
                        {
                            nuestrosClients?.map((client, index) => (
                                <NuestrosClientes
                                    key={index}
                                    client={client}
                                />
                            ))
                        }
                    </div>
            </div>
        </section>
        </Layout>
    )
}

export default PrincipalViewPublic
