import React from "react";

const AuthContext = React.createContext()

const AuthProvider = (props) => {
    const [isAuth, setIsAuth] = React.useState(() => {
      return window.sessionStorage.getItem("token")
    })

    const activateAuth = (token) => {
        setIsAuth(true)
        window.sessionStorage.setItem("token", token)
    }

    return (
        <AuthContext.Provider value={{ isAuth, activateAuth }}>
          {props.children}
        </AuthContext.Provider>
      )
}

export { AuthContext, AuthProvider }