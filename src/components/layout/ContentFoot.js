import React from 'react'
import IconSocial from './IconSocial'
import {ICON__FACEBBOK,ICON__INSTAGRAM,ICON__YOUTUBE, ICON__LINKEDIN} from '../../directories/images'
import ItemContact from './ItemContact'
const ContentFoot = ({footer}) => {
    return (
        <>
            <div className='footer__social'>
                <IconSocial Icon={ICON__FACEBBOK} link={footer.red_Facebook} />
                <IconSocial Icon={ICON__YOUTUBE} link={footer.red_youtube} />
                <IconSocial Icon={ICON__INSTAGRAM} link={footer.red_instagram} />
                <IconSocial Icon={ICON__LINKEDIN} link={footer.red_Linkedin} />
            </div>
            <div className='contenedor-footer'>
                <ItemContact title='telefono' acceso={false} descripcion={footer.telefono} nameClass=' ' />
                <ItemContact title='movil' acceso={false} descripcion={footer.movil} nameClass=' ' />
                <ItemContact title='email' acceso={false} descripcion={footer.email} nameClass='p-email' />
                <ItemContact title='dirección' acceso={false} descripcion={footer.direccion} nameClass=' ' />
                <ItemContact title='horario' acceso={false} descripcion={footer.horario} nameClass=' ' />
            </div>
        </>
    )
}

export default ContentFoot
