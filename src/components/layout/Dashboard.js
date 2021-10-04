import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ICON__LOGO } from '../../directories/images'
import { authSignOutHelper } from '../../helpers/AuthHelpers'
import { authLogout } from '../../reducer/AuthReducer'
const Dashboard = ({children}) => {
    const dispatch = useDispatch()
    const handleSignOut  = async () => {
      await  authSignOutHelper().then(() => dispatch(authLogout()))
    }
    return (
        <div className='container-dashboard'>
            <div className='dashboard-header'>
                <figure className='logo'>
                    <img src={ICON__LOGO} alt='logo' />
                </figure>
                <ul>
                    <li><NavLink exact to='/mision-vision'>Misión / Visión</NavLink></li>
                    <li><NavLink exact to='/que-hacemos'>Que Hacemos</NavLink></li>
                    <li><NavLink exact to='/politicas'>Politicas</NavLink></li>
                    <li><NavLink exact to='/proyectos'>Proyectos</NavLink></li>
                    <li><NavLink exact to='/valores-corporativos'>Valores Corporativos</NavLink></li>
                    <li><NavLink exact to='/estados-financieros'>Estados Financieros</NavLink></li>
                    <li><NavLink exact to='/proteccion-de-datos'>Proteccion de datos</NavLink></li>
                    <li><NavLink exact to='/innovacion'>Innovación</NavLink></li>
                    <li><NavLink exact to='/footer'>Footer</NavLink></li>
                </ul>
            </div>
            <main>
                <div className='main'>
                    <h3> Bienvenido </h3>
                    <button className='btn_danger' onClick={handleSignOut} type='button'>Salir</button>
                </div>
            </main>
            <div className='content-dashboard'>
                <div className='dashboard-container'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
