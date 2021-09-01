import { auth } from '../firebase/firebase'

export const authSignOutHelper = async () => {
    return await auth.signOut()
}

export const authSignIn = async (email,password) => {
    return auth.signInWithEmailAndPassword(email,password)
}