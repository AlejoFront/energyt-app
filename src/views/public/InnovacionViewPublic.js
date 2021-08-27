import React  from 'react';
import { useSelector } from 'react-redux';
import InnovacionItem from '../../components/innovacion/InnovacionItem';
import Footer from '../../components/layout/Footer';
import Nav from '../../components/layout/Nav';
const InnnovacionViewPublic = () => {
    const innovacion = useSelector(state => state.innovacion)
    const {galeria} = innovacion;
    return (
            <>
                <section className="section__innova section__uno">
                    <Nav />
                    <h1>{innovacion.title}</h1>
                    <div className="cont__innnovacion">
                        <figure className="figure">
                            <img src={innovacion.fotoPrincipal} alt="" />
                        </figure>
                        <div className="description">
                            <p>{innovacion.descripcion}</p>
                        </div>
                    </div>
                </section>
                <section class="title__section">
                    <h2>Galeria {innovacion.title}</h2>
                </section>
                <section class="section__innova section__dos">
                    <div class="galeria_innova">
                        {
                            galeria?.map((gal, index) => (
                                <InnovacionItem
                                    key={index}
                                    indice={index+1}
                                    img={gal}
                                />
                            ))
                        }
                    </div>
                </section>
                <Footer/>
            </>
    )
}


export default InnnovacionViewPublic