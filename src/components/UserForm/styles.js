import styled from "styled-components";

const Form = styled.form`
    padding: 16px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 15px;
    padding: 8px 4px;
    display: block;
    width: 80%;
`

const Button = styled.button`
    background: #0095f6;
    border-radius: 3px;
    margin-top: 20px;
    color: #fff;
    height: 32px;
    display: block;
    width: 80%;
    text-align: center;
`

const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        width: 80%;
        font-size: 15px;
        text-align: center;
    }
`

const Image = styled.img`
    width: 200px;
    height: auto;
    margin-bottom: 30px;
    margin-top: 10px;
`

export { Form, Input, Button, Section, Image }

