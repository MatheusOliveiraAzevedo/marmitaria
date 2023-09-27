import React, { useContext } from 'react'
import { BiMenu } from 'react-icons/bi'
import { CardapioContext } from '../../common/context/listaCardapio';
import { ContainerCabecalho, Imagem } from './styles'; 
import MenuLateral from '../Menu';
import logo from '../../assets/logo.png'
import styled from 'styled-components';



const Cabecalho = () => {
    const { exibeMenu, setExibeMenu } = useContext(CardapioContext);
    return (
        <ContainerCabecalho>
            {/* <BiMenu className='iconeMenu' size={50} onClick={() => setExibeMenu(!exibeMenu)} /> */}
            <Imagem src={logo}></Imagem>
            <h1>Marmitaria</h1>
        </ContainerCabecalho>
    )
}

export default Cabecalho