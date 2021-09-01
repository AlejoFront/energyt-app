import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase/firebase'

const AuthenticationViewPublic = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [msg, setMsg] = useState('The email address is badly formatted.')
    const handleSubmit = () => {
        //'desarrollo.energyt@gmail.com','energyt2021'
        auth.signInWithEmailAndPassword(email,password)
        .then(() => console.log('exito'))
        .catch(e => {
            setError(true)
            setMsg(e.message)
        })
    }


    useEffect(() => {
        setTimeout(() => {
            setError(false);
        },9000)
    }, [error])

    return (
        <div className='contenedor__auth'>
            <div className='form__auth'>
                <div className='form'>
                    <h1>Autenticación</h1>
                    <div className="grupo">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span className="barra"></span>
                        <label>Email</label>
                    </div>
                    <div className="grupo">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <span className="barra"></span>
                        <label>Contraseña</label>
                    </div>
                    {
                        error && <div className='alert'> <span className='alert-danger'>{msg}</span> </div>
                    }
                    <div className='btn_control_auth'>
                        <button type="button" onClick={handleSubmit} className='btn_success'>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthenticationViewPublic
