import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    const {title,descripcion} = useSelector(state => state.innovacion)
    return (
        <nav>
            <NavLink exact to='/'>Inicio</NavLink>
            <NavLink to='/sobre-nosotros'>Sobre Nosotros</NavLink>
            <NavLink to='/que-hacemos'>¿Qué Hacemos?</NavLink>
            {
                (title !== null && descripcion !== null)
                && <NavLink to='/innovacion'>Innovación</NavLink>
            }
        </nav>
    )
}

export default Nav
