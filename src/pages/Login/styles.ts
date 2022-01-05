import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;
place-content: center
`;


export const Content = styled.div`
display: flex;
flex-direction: column;
place-content: center
width: 100%;

`;


export const Form = styled.form`
    margin: 80px 0;
    width:340px;
    text-align: center;

    h3{
        margin-bottom: 24px;
        color:#ff9000;
        font-weight: 700;
    }
    
    input{
        background-color:#232129;
        border-radius: 10px;
        border: 1px solid #232129;
        padding:16px;
        width: 100%;
        color: #fff;
        & + input {
            margin-top: 16px;
        }
    }

    button{
        background-color:#ff9000;
        height:56px;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        color: #312e38;
        font-weight: 500;
        margin-top:16px;
        width: 100%;
        transition: background-color 0.2s ;
        &:hover{
            filter: brightness(0.8);
            font-size:1.2em;
            color: white;
            text-decoration: none;
            transition-timing-function: ease-in-out;        
        }
    }
`;