import React, { useContext } from 'react'
import { ContainerItensSelecionados, ListaItensSelecionados, Botoes, Finalizar, BotaoVoltar } from './styled'
import { ProdutosContext } from '../../common/context/produtos'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const CarrinhoMarmita = () => {

    const { bebidasSelecionadas, itensDaMarmita } = useContext(ProdutosContext);
    const navigate = useNavigate();

    return (
        <ContainerItensSelecionados>
            <h2>Seu Pedido</h2>
            <ListaItensSelecionados>
                <div>
                    {itensDaMarmita.map(selecionado => (
                        <li key={selecionado.id}>{selecionado.nome}</li>
                    ))}
                </div>
                <div>
                    {bebidasSelecionadas.map(selecionado => (
                        <li key={selecionado.id}>{selecionado.nome}</li>
                    ))}
                </div>
            </ListaItensSelecionados>
            <Botoes>
                <BotaoVoltar>
                    <RiArrowGoBackLine className='iconClose' size={30} onClick={() => navigate(-1)} />
                </BotaoVoltar>
                <Finalizar>Finalizar Compra</Finalizar>
            </Botoes>
        </ContainerItensSelecionados>
    )
}

export default CarrinhoMarmita