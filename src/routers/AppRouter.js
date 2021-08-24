import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
//import LoadingPage from '../components/loading/LoadingPage'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import RoutersPrivate from './RoutersPrivate'
import RoutersPublic from './RoutersPublic'

const AppRouter = () => {
    let isAuthenticated = false

    // if (true) {
    //     return <LoadingPage />
    // }

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
