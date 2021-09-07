import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <header>
            <Nav />
            <section className="textos-header">
                <h1>ENERGYT <span>S.A.S.</span></h1>
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
