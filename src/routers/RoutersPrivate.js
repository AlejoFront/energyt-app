import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import HomeViewPrivate from '../views/private/HomeViewPrivate'

const RoutersPrivate = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomeViewPrivate} />
            <Route exact path='/dashboard' component={HomeViewPrivate} />
            

            <Redirect to='/dashboard' />
        </Switch>
    )
}

export default RoutersPrivate
