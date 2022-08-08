import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

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

const Image = styled.img`
    width: 200px;
    height: auto;
    margin-bottom: 30px;
    margin-top: 10px;
`

const Link = styled(LinkRouter)`
    font-weight: bold;
    color: #0095f6;
    text-decoration: none;
`

const ErrorSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        font-size: 15px;
        width: 80%;
        font-weight: bold;
        color: crimson;
        text-align: center;
    }
`

export { Form, Input, Button, Section, Image, Link, ErrorSection }

