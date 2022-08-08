import React from "react";
import { AuthContext } from "../context/Auth";
import { UserForm } from "../components/UserForm";
import { LoginMutation } from "../container/LoginMutation";

const NotRegisteredUser = () => {
    const { activateAuth } = React.useContext(AuthContext)
    return(
        <LoginMutation>
            {
                (login, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        login({ variables }).then(({data}) => {
                            const { login } = data
                            activateAuth(login)
                        })
                    }
    
                    const errorMsg = error && "Los datos no son correctos o ha ocurrido un error"

                    return(
                        <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} buttonText="Iniciar Sesión" showRegister={true} />
                    )
                }
            }
        </LoginMutation>
    )
}

export { NotRegisteredUser }