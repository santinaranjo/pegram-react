import React from "react";
import { UserForm } from "../components/UserForm";
import { AuthContext } from "../context/Auth";
import { RegisterMutation } from "../container/RegisterMutation";

const Register = () => {
    const { activateAuth } = React.useContext(AuthContext)

    return(
        <RegisterMutation>
            {
            (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                }

                const errorMsg = error && "El usuario ya existe o hay algún problema"

                return(
                    <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} buttonText="Registro" showRegister={false} />
                )
            }
        }
        </RegisterMutation>
    )
}

export { Register }