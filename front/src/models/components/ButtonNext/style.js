import styled from "styled-components"

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