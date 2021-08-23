import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PrincipalViewPublic from '../views/public/PrincipalViewPublic'
import queHacemosViewPublic from '../views/public/queHacemosViewPublic'
import sobreNosotrosViewPublic from '../views/public/sobreNosotrosViewPublic'

const RoutersPublic = () => {
    return (
        <Switch>
            <Route exact path='/' component={PrincipalViewPublic} />
            <Route exact path='/home' component={PrincipalViewPublic} />
            <Route exact path='/sobre-nosotros' component={sobreNosotrosViewPublic} />
            <Route exact path='/que-hacemos' component={queHacemosViewPublic} />

            <Redirect to='/home' />
        </Switch>
    )
}

export default RoutersPublic
