import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import InnnovacionViewPublic from '../views/public/InnovacionViewPublic'
import PrincipalViewPublic from '../views/public/PrincipalViewPublic'
import QueHacemosViewPublic from '../views/public/QueHacemosViewPublic'
import SobreNosotrosViewPublic from '../views/public/SobreNosotrosViewPublic'

const RoutersPublic = () => {
    return (
        <Switch>
            <Route exact path='/' component={PrincipalViewPublic} />
            <Route exact path='/home' component={PrincipalViewPublic} />
            <Route exact path='/sobre-nosotros' component={SobreNosotrosViewPublic} />
            <Route exact path='/que-hacemos' component={QueHacemosViewPublic} />
            <Route exact path='/innovacion' component={InnnovacionViewPublic} />
            <Redirect to='/home' component={PrincipalViewPublic} />
        </Switch>
    )
}

export default RoutersPublic
