import styled from "styled-components";
import BackgroundPicture from "./assents/backgroundPicture.jpg"

export const MaxContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-image: url(${BackgroundPicture});
    background-repeat: no-repeat;
`
export const BoxForm = styled.div`
    width: 500px;
    height: 70%;
    background: #fff;
    padding: 10px;
    border-radius: 20px;
    @media (max-width: 768px){
        width: 95%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 30px;
    }
    img{
        width: 200px;
        margin-bottom: 15px;
    }
`

export const Button = styled.button`
    width: 110px;
    padding: 10px;
    background: var(--color-primary);
    border: none;
    color: #fff;
    outline: none;
    border-radius: 10px;
    transition: all .2s;

    &:hover{
        background: #002c7e;
        width: 120px;
    }
`