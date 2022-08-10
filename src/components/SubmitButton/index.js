import React from "react";
import { Section, Button } from "./styles";

const SubmitButton = ({children, onClick, disabled}) => {
    return(
        <Section>
            <Button onClick={onClick} disabled={disabled}>{children}</Button>
        </Section>
    )
}

export { SubmitButton }