import { auth, googleProvider } from "../firebase/fireBase";
import { signInWithPopup, signOut } from "firebase/auth";

export const login = (uid) => ({
    type: `LOGIN`,
    uid
})

export const logout = () => ({
    type: `LOGOUT`
})

export const StartLogin = () => {
    return () => {
        return signInWithPopup(auth, googleProvider)
    }
}

export const StartLogout = () => {
    return () => {
        return signOut(auth)
    }
} 