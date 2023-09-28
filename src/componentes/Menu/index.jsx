import React, { useContext } from 'react'
import { CardapioContext } from '../../common/context/listaCardapio'
import BotaoMenu from '../BotaoMenu'
import { ContainerOpcoes } from './styles'

const Menu = () => {

    const { categoriaMenu } = useContext(CardapioContext)

    return (
        <ContainerOpcoes>
            {categoriaMenu.map((categoria) => (
                <BotaoMenu
                    key={categoria.id}
                    categoria={categoria}
                    borda={categoria.selecao}
                />
            ))}
        </ContainerOpcoes>
    )
}

export default Menu