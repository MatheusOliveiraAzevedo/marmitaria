import styled from "styled-components"


export const ContainerPagina = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-top: 40px;
    width: 100vw;
    h2{
        font-size: 20px;
    }
    @media screen and (min-width: 700px) {
        width: auto;
        display: grid;
        grid-template-columns: 30% 1fr;
        grid-template-rows: 1fr% 1fr;
        justify-items: center;
    }
`

export const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 20px;

    button {
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
    }
    .iconClose{
        position: relative;
        padding: 5px;
    }
    @media screen and (min-width: 700px) {
        grid-column: 2;
    }
`


export const ContainerProdutos = styled.section`
    display: flex;
    flex-direction: column;
    position: static;
    align-items: center;
    width: 100vw;
    @media screen and (min-width: 700px) {
        width: auto;
    
    }
    `



export const SomaTotal = styled.span`
    align-self: flex-end;
    margin-right: 40px;
    padding: 10px;
    border-bottom: 2px solid #a5602e6b;
    font-size: 20px;
    font-weight: 500;
`

export const EtiquetaTexto = styled.span`
    align-self: center;
    width: 80%;
    font-size: 14px;
    text-align: center;
    margin: 15px 0;
`


export const ContainerItensSelecionados = styled.section`

`



export const ListaProdutos = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
`

export const ItensProdutos = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    padding: 20px;
    gap: 10px;
    background-color: #676767;
    list-style-type: none;
    color: white;
    font-size: 20px;
`
