import styled from "styled-components";

const Button = styled.button`
    background: #0095f6;
    border-radius: 3px;
    margin-top: 20px;
    color: #fff;
    height: 32px;
    display: block;
    width: 80%;
    text-align: center;
    &[disabled] {
        opacity: .3;
    }
`

const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    span {
        width: 80%;
        font-size: 15px;
        text-align: center;
    }
`

export { Button, Section }