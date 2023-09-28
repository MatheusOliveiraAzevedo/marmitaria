import styled from "styled-components"

export const ListaProdutos = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
`
export const ItensProdutos = styled.li`
    margin: 10px;
    padding: 5px;
    gap: 10px;
    list-style-type: none;
    color: white;
    letter-spacing: 1px;
    font-size: 20px;
    border: ${props => props.$borda ? "4px solid #ad7474" : "none"};
    border-radius: 10px;
`
export const ContainerProduto = styled.div`
    display: flex;
        justify-content: center;
        padding: 15px;
        background-color: #a29f9f;
        border-radius: 10px;
        input {
            display: none;
        }
`
export const LabelProduto = styled.label`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`
