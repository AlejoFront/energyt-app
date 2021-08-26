import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { getNuestrosClients } from '../helpers/NuestrosClientsHelpers'
import { startLoadFooter } from '../reducer/FooterReducer'
import { startLoadNuestrosClientes } from '../reducer/NuestrosClientsReducer'
import {getFooter} from '../helpers/FooterHelpers'
//import LoadingPage from '../components/loading/LoadingPage'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import RoutersPrivate from './RoutersPrivate'
import RoutersPublic from './RoutersPublic'

const AppRouter = () => {
    const dispatch = useDispatch()
    let isAuthenticated = false

    // if (true) {
    //     return <LoadingPage />
    // }

    useEffect(() => {
        getNuestrosClients()
        .then(response =>  dispatch(startLoadNuestrosClientes(response)))
        .catch(e => console.log(e));
        getFooter()
        .then(response => dispatch(startLoadFooter(response)))
        .catch(e => console.log(e));
        return () => {}
    }, [dispatch])

    return (
        <Router>
            <Switch>
                {
                    isAuthenticated 
                    ? <PrivateRouter path='/' component={RoutersPrivate} isAuthenticated={isAuthenticated} />
                    : <PublicRouter path='/' component={RoutersPublic} isAuthenticated={isAuthenticated} />
                }
            </Switch>
        </Router>
    )
}

export default AppRouter
