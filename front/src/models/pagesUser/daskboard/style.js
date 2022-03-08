import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #F2F2F2;
    padding: 100px 0 20px 20px;
    h1{
        font-size: 25px;
    }
`
export const CardContainer = styled.div`
    display: flex;
    gap: 15px;
    @media screen and (max-width: 820px){
        margin-top: 20px;
        align-items: center;
        flex-direction: column;
    }
`
export const InfoClass = styled.div`
    width: 100%;
    background: #000;
    color: #fff;
    padding: 10px;
`
export const ListOfData = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`