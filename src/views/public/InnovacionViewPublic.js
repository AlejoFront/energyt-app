import React  from 'react';
import ReactHtmlParser from 'react-html-parser'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { useSelector } from 'react-redux';
import InnovacionItem from '../../components/innovacion/InnovacionItem';
import Footer from '../../components/layout/Footer';
import Nav from '../../components/layout/Nav';
const InnnovacionViewPublic = () => {
    const innovacion = useSelector(state => state.innovacion)
    const {title,fotoPrincipal,descripcion,galeria} = innovacion;
    return (
            <HelmetProvider>
                <Helmet> <title >ENERGYT | {`Innovación`} </title></Helmet>
                <Nav />
                    <h1 className='title_innovacion titulo'>{title}</h1>
                    <section className='section_uno'>
                        <figure className='img__profile'>
                            <img src={fotoPrincipal} alt='Foto Principal'  />
                        </figure>
                        <article>
                            {ReactHtmlParser(descripcion)}
                        </article>
                    </section>
                    <section className="title__section">
                        <h2>Galeria {title}</h2>
                    </section>
                    <section className='section_dos'>
                        <div className='galeria_innova'>
                            {
                                galeria?.map((data, index) => (
                                    <InnovacionItem
                                        key={index}
                                        data={data}
                                    />
                                ))
                            }
                        </div>
                    </section>
                <Footer/>
            </HelmetProvider>
    )
}


export default InnnovacionViewPublic