import { createContext, useState } from "react";

const initContext = {
    token: null
}

export const AuthContext = createContext(initContext);

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState();
    const [user, setUser] = useState();
    const [login, setLogin] = useState(false)

    const handleSetToken = (t) => {
        setToken(t)
    }
    const handleSetUser = (u) => {
        setUser(u)
    }

    const handleSetLogin= (l) => {
        setLogin(l)
    }
    return (
        <AuthContext.Provider value={{token, handleSetToken, user, handleSetUser, login, handleSetLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;