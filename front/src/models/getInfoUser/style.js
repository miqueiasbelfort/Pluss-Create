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
    max-width: 70%;
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
`

export const Form = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    gap: 10px;

    input{
        width: 80%;
        background: tras;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid gray;
    }
    .teacherAndStudenty{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`