import React, { useEffect, useState } from 'react'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import Header from './Header'
import Footer from './Footer'
const Layout = ({children, title}) => {
    const [pTitle, setpTitle] = useState('')
    useEffect(() => {
        setpTitle(title)
        return () => setpTitle('')
    }, [title])

    return (
        <HelmetProvider>
            <Helmet> <title >ENERGYT | {pTitle} </title></Helmet>
            <Header />
            <main>
                {children}
            </main>
            <Footer/>   
        </HelmetProvider>
    )
}

export default Layout
