import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Inicio</Link>
                <Link to='/sobre-nosotros'>Sobre Nosotros</Link>
                <Link to='/que-hacemos'>¿Qué Hacemos?</Link>
            </nav>
            <section className="textos-header">
                <h1>ENERGYT</h1>
                <h2>Energía y Tecnología S.A.S</h2>
            </section>
            <div className="wave">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M0.00,49.98 C226.86,169.03 448.64,-35.23 515.80,96.02 L500.00,150.00 L0.00,150.00 Z"
                            style={{stroke: 'none', fill: '#fff'}}>
                    </path>
                </svg>
            </div>
        </header>
    )
}

export default Header
