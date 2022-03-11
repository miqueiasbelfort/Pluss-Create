import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, var(--color-yellow), #000);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        color: #fff;
        font-weight: bold;
    }
`
export const BoxForm = styled.div`
    width: 580px;
    background: #fff;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
`
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
`
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    label{
        font-weight: bold;
    }
`
export const Input = styled.input`
    padding: 7px;
    background: #DEDEDE;
    border-radius: 10px 10px 0 0;
    border-bottom: 2px solid var(--color-yellow);
`