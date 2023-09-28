import React, { useContext } from 'react'
import { CardapioContext } from '../../common/context/listaCardapio'
import { Botao } from './styles'


const BotaoMenu = ({ categoria, borda = false }) => {

    const { setCategoriaSelecionada, AlteraBordaMenu } = useContext(CardapioContext)

    return (
        <Botao
            $borda={borda}
            onClick={() => { setCategoriaSelecionada(categoria.id), AlteraBordaMenu(categoria.id) }}
        >
            {categoria.nome}
        </Botao>
    )
}

export default BotaoMenu