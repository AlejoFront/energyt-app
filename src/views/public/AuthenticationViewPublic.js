import React from 'react'
import { auth } from '../../firebase/firebase'

const AuthenticationViewPublic = () => {
    const handleSubmit = () => {
        auth.signInWithEmailAndPassword('administrador@gmail.com','123456789')
        .then(() => console.log('exito'))
        .catch(e => console.log(e))
    }
    return (
        <>
            <button onClick={handleSubmit} >entrar</button>   
        </>
    )
}

export default AuthenticationViewPublic
