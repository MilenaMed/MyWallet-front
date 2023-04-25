import { createContext, useState } from "react";

const initContext = {
    token: null
}

export const AuthContext = createContext(initContext);

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState();

    const handleSetToken = (t) => {
        console.log("Setando o token")
        console.log(t)
        setToken(t)
        console.log("Setando o token")
    }

    return (
        <AuthContext.Provider value={{token, handleSetToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;