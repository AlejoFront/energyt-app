import React, { useState } from 'react'
import { auth } from '../../firebase/firebase'

const AuthenticationViewPublic = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const handleSubmit = () => {
        //'desarrollo.energyt@gmail.com','energyt2021'
        auth.signInWithEmailAndPassword(email,password)
        .then(() => console.log('exito'))
        .catch(e => {
            setError(true)
            setMessage(e.message)
        })
    }
    return (
        <div className='contenedor__auth'>
            <div className='form__auth'>
                <div className='form'>
                    <h1>Autenticación</h1>
                    <div className="grupo">
                        <input type="email" name="" id="" required /><span className="barra"></span>
                        <label>Email</label>
                    </div>
                    <div class="grupo">
                        <input type="password" name="" id="" required /><span className="barra"></span>
                        <label>Contraseña</label>
                    </div>
                    {
                        error && <div className='grupo'> <span className='alert-danger'>{message}</span> </div>
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
