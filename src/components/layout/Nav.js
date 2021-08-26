import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <nav>
            <Link to='/'>Inicio</Link>
            <Link to='/sobre-nosotros'>Sobre Nosotros</Link>
            <Link to='/que-hacemos'>¿Qué Hacemos?</Link>
            <Link to='/innovacion'>Innovación</Link>
        </nav>
    )
}

export default Nav
