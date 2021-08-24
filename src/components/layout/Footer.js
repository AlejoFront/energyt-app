import React from 'react'
import { contact } from '../../directories/contact'
import {ICON__FACEBBOK,ICON__INSTAGRAM,ICON__YOUTUBE} from '../../directories/images'
import ContentFoot from './ContentFoot'
import IconSocial from './IconSocial'
const Footer = () => {
    return (
        <footer>
            <div className='footer__social'>
                <IconSocial Icon={ICON__FACEBBOK} link='https://web.facebook.com/energyt' />
                <IconSocial Icon={ICON__YOUTUBE} link='https://www.youtube.com' />
                <IconSocial Icon={ICON__INSTAGRAM} link='https://www.instagram.com/' />
            </div>
            <div className='contenedor-footer'>
                {
                    contact.map((cont, index) => (
                        <ContentFoot  
                            key={index}
                            name={cont.name}
                            description={cont.description}
                            nameClass={cont.nameClass}
                        />
                    ))
                }
                
            </div>
            <h2 className='titulo-final'>&copy; ENERGYT <span>S.A.S</span></h2>
        </footer>
    )
}

export default Footer
