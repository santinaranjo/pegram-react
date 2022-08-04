import React from "react";

const AuthContext = React.createContext()

const AuthProvider = (props) => {
    const [isAuth, setIsAuth] = React.useState(false)

    const activateAuth = () => {
        setIsAuth(true)
    }

    return (
        <AuthContext.Provider value={{ isAuth, activateAuth }}>
          {props.children}
        </AuthContext.Provider>
      )
}

export { AuthContext, AuthProvider }