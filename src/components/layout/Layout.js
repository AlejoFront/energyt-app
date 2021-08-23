import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
const Layout = ({children, title}) => {
    return (
        <>
            <Helmet>
                <title>ENERGYT | {title}</title>
            </Helmet>
            <header>
                <ul style={{display: 'flex', flexDirection:'column'}}>
                    <Link to='/' >Home</Link>
                    <Link to='/sobre-nosotros' >Sobre Nosotros</Link>
                    <Link to='/que-hacemos' >¿Que Hacemos?</Link>
                </ul>
            </header>
                {children}
            <footer>Footer</footer>   
        </>
    )
}

export default Layout
