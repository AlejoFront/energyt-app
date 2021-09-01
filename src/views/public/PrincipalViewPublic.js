import React from 'react'
import Layout from '../../components/layout/Layout'
import { clients } from '../../directories/clients'
import ModalClientes from '../../components/clients/ModalClientes'
import NuestrosClientes from '../../components/clients/NuestrosClientes'
import { ICON__LOGO } from '../../directories/images'
const PrincipalViewPublic = () => {

    return (
        <Layout title='Inicio'>
            <section className="contenedor acerca-de">
                <h2 className="titulo">Acerca de</h2>
                <div className="contenedor-acerca-de">
                    <img src={ICON__LOGO} alt="" className="imagen-about-us" />
                    <div className="contenido-textos">
                        <p> <b>ENERGYT <span>S.A.S </span></b>
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
            <h2 className="titulo">Nuestros Clientes</h2>
            <section className="nuestros-clientes" id="nuestros-clientes">
                <div className="contenedor">
                        <div className="galeria-clientes">
                            {
                                clients.map((client, index) => (
                                    <NuestrosClientes 
                                        key={index}
                                        indice={index}
                                        client={client}
                                    />
                                ))
                            }
                        </div>
                </div>
            </section>
            {
               clients.map((client, index) => (
                   <ModalClientes
                        key={index}
                        indice={index}
                   />
               ))
            }
        </Layout>
    )
}

export default PrincipalViewPublic
