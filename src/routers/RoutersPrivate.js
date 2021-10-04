import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import EstadosFinancierosViewPrivate from '../views/private/EstadosFinancierosViewPrivate'
import FooterViewPrivate from '../views/private/FooterViewPrivate'
import HomeViewPrivate from '../views/private/HomeViewPrivate'
import InnovacionViewPrivate from '../views/private/InnovacionViewPrivate'
import MisionVisionViewPrivate from '../views/private/MisionVisionViewPrivate'
import PoliticasViewPrivate from '../views/private/PoliticasViewPrivate'
import ProteccionDatosViewPrivate from '../views/private/ProteccionDatosViewPrivate'
import ProyectosViewPrivate from '../views/private/ProyectosViewPrivate'
import QueHacemosViewPrivate from '../views/private/QueHacemosViewPrivate'
import ValoresCorporativos from '../views/private/ValoresCorporativos'

const RoutersPrivate = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomeViewPrivate} />
            <Route exact path='/dashboard' component={HomeViewPrivate} />
            <Route exact path='/mision-vision' component={MisionVisionViewPrivate} />
            <Route exact path='/que-hacemos' component={QueHacemosViewPrivate} />
            <Route exact path='/politicas' component={PoliticasViewPrivate} />
            <Route exact path='/proyectos' component={ProyectosViewPrivate} />
            <Route exact path='/valores-corporativos' component={ValoresCorporativos} />
            <Route exact path='/estados-financieros' component={EstadosFinancierosViewPrivate} />
            <Route exact path='/proteccion-de-datos' component={ProteccionDatosViewPrivate} />
            <Route exact path='/innovacion' component={InnovacionViewPrivate} />
            <Route exact path='/footer' component={FooterViewPrivate} />
            <Redirect to='/dashboard' />
        </Switch>
    )
}

export default RoutersPrivate
