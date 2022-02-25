import styled from 'styled-components'

export const Container = styled.div` //Div Container
    
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .person{
        width: 55%;
        height: 100vh;
        animation-name: AnimationImgLeft;
        animation-duration: .70s;
        transition: 0.2s;
        object-fit: cover;
        box-shadow: 20px 0px 20px 1px #c1c1c1;
    }

    .right{
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        gap: 20px;
        animation-name: AnimationForm;
        animation-duration: .70s;
        transition: 0.2s;

        img{
            margin-bottom: 30px;
        }
    }

    @media(max-width: 1023px){
        .right{
            font-size: 12px;
            img{
                width: 250px;
            }
        }
    }
    @media(max-width: 767px){
        .person{
            display: none;
        }
        .rigth{
            width: 100%;
            font-size: 18px;
            animation-name: AnimationFormMedia;
            animation-duration: .7s;
            transition: 0.2s;
            img{
                width: 350px;
            }
        }
    }

    @keyframes AnimationImgLeft {
        from {
            transform: translateX(-50%);
            opacity: 0;
        }
        to {
            transform: translateX(0%);
            opacity: 1;
        }
    }
    @keyframes AnimationForm {
        from {
            transform: translateX(50%);
            opacity: 0;
        }
        to {
            transform: translateX(0%);
            opacity: 1;
        }
    }

    @keyframes AnimationFormMedia {
        from {
            transform: translateY(-50%);
            opacity: 0;
        }
        to {
            transform: translateY(0%);
            opacity: 1;
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
    margin: 10px 0px 40px 0;

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