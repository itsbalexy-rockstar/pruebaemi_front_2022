import { LoginWithEmailAndPassword, LogoutFirebase } from "../../firebase/providers"
import { checkAuth, logout, login } from "./authSlice"

// export const checkingAuth = (email, password) => {
//     return async (dispatch) => {
//         dispatch(checkAuth())
//     }
// }

export const startLoginWithEmailAndPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkAuth())
        const response = await LoginWithEmailAndPassword({email, password})
        if(!response.ok) return dispatch(logout(response))
        dispatch(login(response))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await LogoutFirebase()
        dispatch(logout({}))
    }
}