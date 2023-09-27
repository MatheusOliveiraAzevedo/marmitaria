import React, { useContext } from 'react'
import { CardapioContext } from '../../common/context/listaCardapio'
import { ContainerLabelTamanho, ContainerSectionTamanho, EtiquetaTexto, InputTamanho, SomaTotal } from './styles';
import { ProdutosContext } from '../../common/context/produtos';
import { useNavigate } from 'react-router-dom';


const Tamanhos = () => {
    const { tamanhos } = useContext(CardapioContext);
    const { valorMonetario, aoClicar, clickBotao, aoClicarTamanho, totalDoPedido } = useContext(ProdutosContext);
    const navigate = useNavigate();
   

    return (
        <ContainerSectionTamanho>
            <h2>Tamanhos de Marmitas</h2>
            <EtiquetaTexto>Selecione o tamanho da marmita que deja abaixo:</EtiquetaTexto>
            {tamanhos.map((item, index) => (
                <ContainerLabelTamanho key={item.id} htmlFor={`tamanho${index}`}>
                    <div>
                        <InputTamanho type="radio" value={item.valor} name='tamanho' id={`tamanho${index}`} onChange={(event) => {aoClicarTamanho(event.target.value)}}/> {item.nome}
                    </div>
                    <span>{valorMonetario(item.valor)}</span>
                </ContainerLabelTamanho>
            ))}
            <button
                onClick={() => {navigate("/produtos"), aoClicar()}}
                disabled={totalDoPedido === 0}
            >
                CONTINUAR
            </button>
        </ContainerSectionTamanho>
    )
}

export default Tamanhos