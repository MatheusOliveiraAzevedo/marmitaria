import styled from "styled-components";

export const Botao = styled.button`
padding: 15px;
border: none;
border: 0.5px solid black;
border-radius: 10px;
background-color: ${props => props.$borda ? "#d7b794" : "#a5602e"};
color: ${props => props.$borda ? "black" : "white"};
box-shadow: ${props => props.$borda ? "0px -5px 10px #a5602e" : "none"};
letter-spacing: 4px;
font-size: 12px;
@media screen and (min-width: 700px) {
    font-size: 16px;
    box-shadow: ${props => props.$borda ? "0px -5px 10px #d7b794" : "none"};
    border-radius: 0;
    height: 20%;
    }
` 