import React from 'react'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import Header from './Header'
import Footer from './Footer'
const Layout = ({children, title}) => {

    return (
        <HelmetProvider>
            <Helmet> <title >ENERGYT | {title} </title></Helmet>
            <Header />
            <main>
                {children}
            </main>
            <Footer/>   
        </HelmetProvider>
    )
}

export default Layout
