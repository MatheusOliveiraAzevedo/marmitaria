import React, { useContext } from 'react'
import { ProdutosContext } from '../../common/context/produtos'
import { CardapioContext } from '../../common/context/listaCardapio'
import { ContainerProduto, ItensProdutos, LabelProduto } from './styles'


const Produto = ({ produto, index, borda }) => {
    const { AlteraBorda } = useContext(CardapioContext)
    const { listaItensMarmita, valorMonetario } = useContext(ProdutosContext);

    return (
        <>
            <ItensProdutos $borda={borda}>
                <ContainerProduto>
                    <input
                        type="checkbox"
                        checked={borda}
                        id={`comida-${index}`}
                        onChange={(event) => {
                            listaItensMarmita(event, produto),
                                AlteraBorda(produto.id)
                        }}
                    />
                    <LabelProduto htmlFor={`comida-${index}`}>
                        <div>
                            {produto.nome}
                        </div>
                        <div>
                            {valorMonetario(produto.valor)}
                        </div>
                    </LabelProduto>
                </ContainerProduto>
            </ItensProdutos>
        </>
    )
}

export default Produto