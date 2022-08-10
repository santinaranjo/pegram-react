import React from "react";
import { AuthContext } from "../context/Auth";
import { SubmitButton } from "../components/SubmitButton";


const User = () => {
    const { removeAuth } = React.useContext(AuthContext)

    return(
        <React.Fragment>
            <h1>User</h1>
            <SubmitButton onClick={removeAuth} >
                Cerrar sesión
            </SubmitButton>
        </React.Fragment>
    )
}

export { User }