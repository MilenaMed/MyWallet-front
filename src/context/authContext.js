import { createContext, useState } from "react";

const initContext = {
    token: null
}

export const AuthContext = createContext(initContext);

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState();
    const [user, setUser] = useState()

    const handleSetToken = (t) => {
        setToken(t)
    }
    const handleSetUser = (u) => {
        setUser(u)
    }
    return (
        <AuthContext.Provider value={{token, handleSetToken, user, handleSetUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;