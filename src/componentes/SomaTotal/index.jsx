import React, { useContext } from 'react'
import { ProdutosContext } from '../../common/context/produtos'
import { Total } from './styled'

const SomaTotal = () => {

    const { valorMonetario, totalDoPedido } = useContext(ProdutosContext)

    return (
        <Total>
            <span>{`Total ${valorMonetario(totalDoPedido)}`}</span>
        </Total>
    )
}

export default SomaTotal