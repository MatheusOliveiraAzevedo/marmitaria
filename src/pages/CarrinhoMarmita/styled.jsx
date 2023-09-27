import styled from "styled-components";

export const ContainerItensSelecionados = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ListaItensSelecionados = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    li {
        list-style-type: none;
        font-size: 20px;

    }
`

export const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 20px;
`

export const BotaoVoltar = styled.button`
    align-self: center;
    background-color: #a5602e6b;
    margin: 0;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: self-start;
    width: 20%;
    .iconClose{
        position: relative;
        padding: 5px;
    }
`

export const Finalizar = styled.button`
    background-color: green;
    border-radius: 10px;
`