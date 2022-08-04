import React from "react";
import { UserForm } from "../components/UserForm";
import { AuthContext } from "../context/Auth";
import { RegisterMutation } from "../container/RegisterMutation";

const Register = () => {
    const { activateAuth } = React.useContext(AuthContext)

    return(
        <RegisterMutation>
            {
            (register) => {
                const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                }
                return(
                    <UserForm onSubmit={onSubmit} buttonText="Registro" showRegister={false} />
                )
            }
        }
        </RegisterMutation>
    )
}

export { Register }