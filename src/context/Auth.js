import React from "react";
import { useApolloClient } from "@apollo/client";

const AuthContext = React.createContext()

const AuthProvider = (props) => {
    const [isAuth, setIsAuth] = React.useState(() => {
      return window.sessionStorage.getItem("token")
    })

    const activateAuth = (token) => {
        setIsAuth(true)
        window.sessionStorage.setItem("token", token)
    }

    const removeAuth = (token) => {
      setIsAuth(false)
      window.sessionStorage.removeItem("token")
  }

    return (
        <AuthContext.Provider value={{ isAuth, activateAuth, removeAuth }}>
          {props.children}
        </AuthContext.Provider>
      )
}

export { AuthContext, AuthProvider }