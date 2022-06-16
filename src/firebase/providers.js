import { signInWithEmailAndPassword } from "firebase/auth"
import { FirebaseAuth } from "./config"

export const LoginWithEmailAndPassword = async({email, password}) => {
    try {
        const response = await signInWithEmailAndPassword(FirebaseAuth,email, password)
        const {user} = response
        return {
            ok: true,
            email: user.email, 
            password: user.password
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}
export const LogoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}