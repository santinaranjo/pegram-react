import React from "react";
import { UserForm } from "../components/UserForm";
import { AuthContext } from "../context/Auth";

const Register = () => {
    const { activateAuth } = React.useContext(AuthContext)

    return(
        <UserForm onSubmit={activateAuth} buttonText="Registro" showRegister={false} />
    )
}

export { Register }