import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { startLoadFooter } from '../reducer/FooterReducer'
import {getFooter} from '../helpers/FooterHelpers'
import LoadingPage from '../components/loading/LoadingPage'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import RoutersPrivate from './RoutersPrivate'
import RoutersPublic from './RoutersPublic'
import { getEstadosFinancieros, getMision, getPoliticas, getProteccionDatos, getVision } from '../helpers/SobreNosotrosHelpers'
import { startLoadeEstadosFinancieros, startLoadMision, startLoadPoliticas, startLoadProteccion, startLoadVision } from '../reducer/SobreNosotrosReducer'
import { authLoaded, authLoading, authLogin } from '../reducer/AuthReducer'
import { getProyectos, getQueHacemos } from '../helpers/QueHacemosHelpers'
import { startLoadProjects, startLoadQueHacemos } from '../reducer/QueHacemosReducer'
import { getInnovacion } from '../helpers/InnovacionHelpers'
import { startLoadInnovacion } from '../reducer/InnovacionReducer'
import { auth } from '../firebase/firebase'

const AppRouter = () => {
    const {loading, isAuthenticated} = useSelector(state => state.auth)
    const dispatch = useDispatch()




    useEffect(() => {

        dispatch(authLoading());
        auth.onAuthStateChanged(async user =>{
            if (user?.uid) {
                dispatch(await authLogin());
            }else {
                dispatch(authLoaded());
            }
        })
        getFooter()
        .then(response => dispatch(startLoadFooter(response)))
        .catch(e => console.log(e));
        getMision()
        .then(response => dispatch(startLoadMision(response)))
        .catch(e => console.log(e));
        getVision()
        .then(response => dispatch(startLoadVision(response)))
        .catch(e => console.log(e));
        getQueHacemos()
        .then(response => dispatch(startLoadQueHacemos(response)))
        .catch(e => console.log(e));
        getProyectos()
        .then(response => dispatch(startLoadProjects(response)))
        .catch(e => console.log(e));
        getPoliticas()
        .then(response => dispatch(startLoadPoliticas(response)))
        .catch(e => console.log(e));
        getEstadosFinancieros()
        .then(response => dispatch(startLoadeEstadosFinancieros(response)))
        .catch(e => console.log(e));
        getProteccionDatos()
        .then(response => dispatch(startLoadProteccion(response)))
        .catch(e => console.log(e));
        getInnovacion()
        .then(response => dispatch(startLoadInnovacion(response)))
        .catch(e => console.log(e));
        return () => {}
    }, [dispatch])

    if (loading) {
         return <LoadingPage />
     }

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
