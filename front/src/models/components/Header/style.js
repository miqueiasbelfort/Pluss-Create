import styled from "styled-components";

export const Heade = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 10px 0;
    justify-content: space-around;
    box-shadow: 0px -1px 4px 1px #c0c0c0; 
    
    img{
        width: 150px;
    }

    .infoAndAddClass{
        display: flex;
        align-items: center;
        gap: 15px;
        
        button{
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #FCA213;
            background: transparent;
            border-radius: 5px;
            cursor: pointer;
            transition: all ease .2s;
            color: #FCA213;
        }

        button:hover{
            background: #FCA213;
            color: #fff;
            border: none;
        }

        .boxUserImg{
            display: flex;
            align-items: center;
            cursor: pointer;
             
            .userPictureHeader{
                display: flex;
                align-items: center;
                font-size: 30px;
            }
        }
    }
`