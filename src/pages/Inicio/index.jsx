import React from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import { Outlet } from 'react-router-dom'
import SomaTotal from '../../componentes/SomaTotal'
import Rodape from '../../componentes/Rodape'
import { Container } from './styles'

const Inicio = () => {
    return (
        <Container>
            <Cabecalho />
            <SomaTotal />
            <Outlet />
            <Rodape />
        </Container>
    )
}

export default Inicio