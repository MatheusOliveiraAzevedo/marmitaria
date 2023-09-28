import React, { useContext, useEffect } from 'react'
import { ProdutosContext } from '../../common/context/produtos'
import Produto from '../../componentes/Produto'
import { CardapioContext } from '../../common/context/listaCardapio'
import Menu from '../../componentes/Menu'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Botoes, ContainerPagina, ContainerProdutos, ListaProdutos, EtiquetaTexto } from './styles'
import { useNavigate } from 'react-router-dom'
import SomaTotal from '../../componentes/SomaTotal'

const Produtos = () => {

    const { produtosSelecionados, setBebidasSelecionadas, setItensDaMarmita, totalDoPedido, valorMonetario, travaCarnes, mostraAlertaProdutos } = useContext(ProdutosContext);
    const { listaMenuSelecionada } = useContext(CardapioContext);
    const navigate = useNavigate()

    useEffect(() => {
        setBebidasSelecionadas(produtosSelecionados.filter(item => item.categoria === 3))
        setItensDaMarmita(produtosSelecionados.filter(item => item.categoria !== 3))
    }, [produtosSelecionados])



    return (
        <ContainerPagina>
            <Menu />
            <ContainerProdutos>
                <EtiquetaTexto>Utilize o menu para navegar entre as opções do cardapio.</EtiquetaTexto>
                <h2>Monte sua Marmita abaixo:</h2>
                <EtiquetaTexto>Selecione no maximo 2 opções de Carnes</EtiquetaTexto>
                <ListaProdutos>

                    {listaMenuSelecionada.map((produto) => (
                        <Produto key={produto.id} produto={produto} borda={produto.selecao} index={produto.id} />
                    ))}
                </ListaProdutos>
            </ContainerProdutos>
            <Botoes>
                <button>
                    <RiArrowGoBackLine className='iconClose' size={30} onClick={() => navigate(-1)} />
                </button>
                <button>
                    <AiOutlineArrowRight className='iconClose' size={30} onClick={() => mostraAlertaProdutos()} />
                </button>
            </Botoes>
        </ContainerPagina>
    )
}

export default Produtos