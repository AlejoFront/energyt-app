import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <nav>
            <NavLink exact to='/'>Inicio</NavLink>
            <NavLink to='/sobre-nosotros'>Sobre Nosotros</NavLink>
            <NavLink to='/que-hacemos'>¿Qué Hacemos?</NavLink>
            <NavLink to='/innovacion'>Innovación</NavLink>
        </nav>
    )
}

export default Nav
