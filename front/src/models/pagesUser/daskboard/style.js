import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #F2F2F2;
    padding: 70px 20px;

    .boxCard{
        display: flex;
        gap: 10px;
    }

    @media (max-width: 768px){
        .boxCard{
            flex-direction: column;
            align-items: center;
        }
    }
`
export const Card = styled.div`
    width: 300px;
`

export const InfoClass = styled.div`
    width: 100%;
    background: #000;
    color: #FFF;
`