import React from 'react'

const IconSocial = ({Icon, link}) => {
    return (
        <a  href={link} 
            rel='noreferrer' target='_blank' className='footer__link'>
            <img src={Icon} alt='Icono-Facebook' className='footer__icon' />
        </a>
    )
}

export default IconSocial
