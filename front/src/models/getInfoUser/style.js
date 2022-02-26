import styled from "styled-components";
import BackgroundPicture from "./assents/backgroundPicture.jpg"

export const MaxContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${BackgroundPicture});
`

export const BoxForm = styled.form`
    max-width: 60%;
    width: 100%;
    max-height: 85%;
    height: 100%;
    background: #ffff;
    border-radius: 45px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        text-align: center;
        font-weight: 400;
    }
    img{
        width: 200px;
        margin-top: 20px;
    }

    @media (max-width: 760px){
        font-size: 16px;
        max-width: 100%;
    }
`

export const Form = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    gap: 10px;

    input{
        width: 80%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid gray;
    }
    .teacherAndStudenty{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    @media (max-width: 999px){
        input{
            width: 100%;
        }
    }

    @media (max-width: 760px){
        input{
            width: 100%;
        }
        button{
            width: 150px;
        }
    }
`