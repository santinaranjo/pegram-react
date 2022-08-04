import React from "react";
import { AuthContext } from "../context/Auth";
import { UserForm } from "../components/UserForm";

const NotRegisteredUser = () => {
    const { activateAuth } = React.useContext(AuthContext)
    return(
        <UserForm onSubmit={activateAuth} buttonText="Iniciar Sesión" showRegister={true} />
    )
}

export { NotRegisteredUser }