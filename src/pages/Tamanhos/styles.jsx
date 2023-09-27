import styled from "styled-components";


export const ContainerSectionTamanho = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    h2 {
        align-self: center;
    }

    button {
        width: 50%;
        align-self: center;
        margin-top: 60px;
        padding: 10px;
        font-size: 20px;
        letter-spacing: 2px;
        border: none;
        box-shadow: 10px 10px 20px black;
        border-radius: 10px;
        margin-bottom: 30px;
    }
    
    @media screen and (min-width: 700px) {
        
        button {
            width: 40%;
        }
        button:hover {
            scale: 1.2;
        }
        button:active {
            scale: 1.2;
        }
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
export const ContainerLabelTamanho = styled.label`
    background-color: #a29f9f;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    margin: 2px 10px;
    padding: 15px;
    span {
        
    }
    @media screen and (min-width: 700px) {
    margin: 10px 50px;
    }
`
export const InputTamanho = styled.input`
    
`

export const EtiquetaTexto = styled.span`
    align-self: center;
    width: 80%;
    font-size: 14px;
    text-align: center;
    margin: 15px 0;
`