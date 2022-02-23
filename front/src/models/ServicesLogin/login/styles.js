import styled from 'styled-components'

export const Container = styled.div` //Div Container
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;

    div:first-child{
        max-width: 60%;
        width: 100%;
        height: 100%;
        background: black;
    }

    div{
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    @media(max-width: 1023px){
        div:first-child{

        }
        div{
            font-size: 12px;
            img{
                width: 250px;
            }
        }
    }
    @media(max-width: 767px){
        div:first-child{
            display: none;
        }
        div{
            width: 100%;
            font-size: 18px;
            img{
                width: 350px;
            }
        }
    }
`

export const Button = styled.button`
    width: 200px;
    padding: 10px;
    border-radius: 8px;
    background: ${props => `${props.background}`};
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 700;
    transition: background .2s;
    cursor: pointer;

    &:hover{
        background: ${props => `${props.backgroundHover}`};
    }

    @media(max-width: 767px){
        width: 300px;
        font-size: 19px;
    }

`
export const Img = styled.img`
    width: 400px;
`