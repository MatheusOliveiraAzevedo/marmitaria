import styled from "styled-components";

export const ContainerOpcoes = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position: static;
    top: 0;
    left: 0;
    transition: 500ms all;
    gap: 5px;
    margin-bottom: 30px;
    @media screen and (min-width: 700px) {
        flex-direction: column;
        width: auto;
        background-color: #a5602e;
        border: none;
        height: 100vh;
        grid-row: span 2;
        justify-self: start;
        gap: 0;
        margin: 0;
    }
`
export const BotaoVoltar = styled.button`
    align-self: center;
    background-color: #c3b6a3;
    margin: 20px 0;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    .iconClose{
        position: relative;
        padding: 5px;
    }
`