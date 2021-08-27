import React from 'react'
import IconSocial from './IconSocial'
import {ICON__FACEBBOK,ICON__INSTAGRAM,ICON__YOUTUBE} from '../../directories/images'
import ItemContact from './ItemContact'
const ContentFoot = ({footer}) => {
    return (
        <>
            <div className='footer__social'>
                <IconSocial Icon={ICON__FACEBBOK} link={footer.red_Facebook} />
                <IconSocial Icon={ICON__YOUTUBE} link={footer.red_youtube} />
                <IconSocial Icon={ICON__INSTAGRAM} link={footer.red_instagram} />
            </div>
            <div className='contenedor-footer'>
                <ItemContact title='telefono' descripcion={footer.telefono} nameClass=' ' />
                <ItemContact title='movil' descripcion={footer.movil} nameClass=' ' />
                <ItemContact title='email' descripcion={footer.email} nameClass='p-email' />
                <ItemContact title='dirección' descripcion={footer.direccion} nameClass=' ' />
                <ItemContact title='horario' descripcion={footer.horario} nameClass=' ' />

            </div>
        </>
    )
}

export default ContentFoot
