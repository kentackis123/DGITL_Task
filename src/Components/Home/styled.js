import styled from 'styled-components'

const LoginWrap = styled.div`
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    z-index: 1;
    background: #0F121A;
    div:first-child {
        width: 25%;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    @media only screen and (max-width: 1000px) {
        div:first-child {
            width: 50%;
        }
    }
    @media only screen and (max-width: 400px) {
        div:first-child {
            width: 80%;
        } 
    }
`

const Input = styled.input`
    padding: 10px 15px;
    background-color: #fff;
    color: rgb(179, 179, 179);
    border-radius: 4px;
    outline: none;
    border: none;
    margin-bottom: 18px;
    width: 100%;
    font-size: 16px;
    line-height: 30px;
    box-sizing: border-box;
    &:focus {
        color: #999;
    }
    &::placeholder {
        color: rgb(179, 179, 179);
    }
`

const Button = styled.button`
    background-color: rgb(159, 213, 51);
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
    width: 100%;
    border: none;
    color: #fff;
    padding: 17px 0 11px;
    outline: none;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    &:hover {
        background-color: #86b300;
    }
`

const Validator = styled.p`
    margin: 0;
    font-size: 20px;
    color: #ed2939;
    font-weight: bold;
    position: absolute;
    top: 10;
    left: 105%;
    width: 100%;
`
const Result = styled.p`
    font-size: 20;
    color: #fff;
    letter-spacing: 2px;
    font-weight: bold;
`
const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.9);
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    button {
        width: 25%;
    }
`

export { LoginWrap, Input, Button, Validator, Result, Overlay }