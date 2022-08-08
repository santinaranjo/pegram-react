import React from "react";
import { useInputValue } from "../../hooks/useInputValue"
import { Form, Input, Button, Section, Image, Link, ErrorSection } from "./styles";
import Dog from "../../assets/dog.svg"

const UserForm = ({ disabled, error, onSubmit, buttonText, showRegister }) => {
    const email = useInputValue("")
    const password = useInputValue("")

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({ email: email.value, password: password.value })
    }
    return(
        <React.Fragment>
            <Section>
                <Image src={Dog} alt="dog logo" />
                <span>
                    Inicia sesión con tu cuenta de Petgram y descubre el increible mundo de las mascotas.
                </span>
            </Section>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Input disabled={disabled} placeholder="Email" {...email} />
                <Input disabled={disabled} placeholder="Password" type="password" {...password} />
                <Button disabled={disabled}>{buttonText}</Button>
            </Form>
            {error && <ErrorSection><span>{error}</span></ErrorSection>}
            {
                showRegister
                    ?   
                        <Section>
                            <span>¿No tienes una cuenta? <Link to="/register" href="#">Regístrate</Link></span>
                        </Section>
                    : null
            }
        </React.Fragment>
    )
}

export { UserForm }