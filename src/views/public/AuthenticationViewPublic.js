import React from 'react'
import { auth } from '../../firebase/firebase'

const AuthenticationViewPublic = () => {
    const handleSubmit = () => {
        auth.signInWithEmailAndPassword('desarrollo.energyt@gmail.com','energyt2021')
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
