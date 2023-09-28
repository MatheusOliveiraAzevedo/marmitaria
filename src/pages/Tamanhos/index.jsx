import React, { useContext } from 'react'
import { CardapioContext } from '../../common/context/listaCardapio'
import { ContainerLabelTamanho, ContainerSectionTamanho, EtiquetaTexto, InputTamanho } from './styles';
import { ProdutosContext } from '../../common/context/produtos';


const Tamanhos = () => {
    const { tamanhos } = useContext(CardapioContext);
    const { valorMonetario, aoClicarTamanho, mostrarAlertaTamanho } = useContext(ProdutosContext);

    return (
        <ContainerSectionTamanho>
            <h2>Tamanhos de Marmitas</h2>
            <EtiquetaTexto>Selecione o tamanho da marmita que deja abaixo:</EtiquetaTexto>
            {tamanhos.map((item, index) => (
                <ContainerLabelTamanho key={item.id} htmlFor={`tamanho${index}`}>
                    <div>
                        <InputTamanho
                            type="radio"
                            value={item.valor}
                            name='tamanho'
                            id={`tamanho${index}`}
                            onChange={(event) => { aoClicarTamanho(event.target.value) }}
                        />
                        {item.nome}
                    </div>
                    <span>{valorMonetario(item.valor)}</span>
                </ContainerLabelTamanho>
            ))}
            <button
                onClick={() => { mostrarAlertaTamanho() }}
            >
                CONTINUAR
            </button>
        </ContainerSectionTamanho>
    )
}

export default Tamanhos