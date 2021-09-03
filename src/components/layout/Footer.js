import React from 'react'
import { useSelector } from 'react-redux'
//import { contact } from '../../directories/contact'

import ContentFoot from './ContentFoot'

const Footer = () => {
    const footer = useSelector(state => state.footer)
    return (
        <footer>
            <ContentFoot footer={footer}/>
            <h2 className='titulo-final'>&copy; ENERGYT <span>S.A.S</span></h2>
            <a href='http://energyt.co:2095/' rel='noreferrer' target='_blank'>Correo Administrativo</a>
        </footer>
    )
}

export default Footer
