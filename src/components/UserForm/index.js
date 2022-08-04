import React from "react";
import { useInputValue } from "../../hooks/useInputValue"
import { Form, Input, Button, Section, Image, Link } from "./styles";
import Dog from "../../assets/dog.svg"

const UserForm = ({ onSubmit, buttonText, showRegister }) => {
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
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Email" {...email} />
                <Input placeholder="Password" type="password" {...password} />
                <Button>{buttonText}</Button>
            </Form>
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