import React from "react";
import { useInputValue } from "../../hooks/useInputValue"
import { Form, Input, Button, Section, Image } from "./styles";
import Dog from "../../assets/dog.svg"

const UserForm = ({ onSubmit }) => {
    const email = useInputValue("")
    const password = useInputValue("")
    return(
        <React.Fragment>
            <Section>
                <Image src={Dog} alt="dog logo" />
                <span>
                    Inicia sesión con tu cuenta de Petgram y descubre el increible mundo de las mascotas.
                </span>
            </Section>
            <Form onSubmit={onSubmit}>
                <Input placeholder="Email" {...email} />
                <Input placeholder="Password" type="password" {...password} />
                <Button>Iniciar Sesión</Button>
            </Form>
        </React.Fragment>
    )
}

export { UserForm }