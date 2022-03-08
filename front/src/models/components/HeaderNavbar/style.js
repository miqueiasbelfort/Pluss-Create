import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background: #fff;
    position: fixed;
    z-index: 999;
    padding: 10px 20px;

    @media screen and (max-width: 620px){
        justify-content: end;
        .logo{
            display: none;
        }
    }
`
export const Img = styled.img`
    width: 150px;
`
export const Perfil = styled.div`
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid #ccc;
    }
`
export const Tools = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
    .link{
        text-decoration: none;
        color: #000;
    }
`
export const ButtonAddClass = styled.button`
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-weight: 400;
`