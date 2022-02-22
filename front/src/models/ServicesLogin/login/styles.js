import styled from 'styled-components'

export const BoxMaster = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    overflow-y: hidden;

    img{
        width: 60%;
        background: cover;
        filter: brightness(80%);
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 300px;
    }
`

export const MaxContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
`

export const DisplayFlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
`
export const Button = styled.button`
    width: 200px;
    padding: 10px;
    border-radius: 8px;
    background: #FCA213;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: bold;
    transition: all .2s ease;
    cursor: pointer;
`

export const GitButton = styled.button`
    background: #000;
`
