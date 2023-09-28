import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
    
    const [produtosSelecionados, setProdutosSelecionados] = useState([]);
    const [bebidasSelecionadas, setBebidasSelecionadas] = useState([]);
    const [itensDaMarmita, setItensDaMarmita] = useState([]);
    const [clickBotao, setClickBotao] = useState(false)
    const [totalDoPedido, setTotalDoPedido] = useState(0)
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState(0)
    const [travaCarnes, setTravaCarnes] = useState()
    const navigate = useNavigate();
    
    useEffect(() => {


        setTotalDoPedido(produtosSelecionados.reduce((soma, selecao) => {
            return Number(soma) + selecao.valor;
        }, Number(tamanhoSelecionado)))

        setTravaCarnes(produtosSelecionados.reduce((soma, selecao) => {
            return selecao.categoria === 1 && soma + 1
        }, 0))

        
      }, [produtosSelecionados, setTotalDoPedido, tamanhoSelecionado, setTravaCarnes])
    
    return (
        <ProdutosContext.Provider
        value={{
            produtosSelecionados,
            listaItensMarmita,
            bebidasSelecionadas,
            setBebidasSelecionadas,
            itensDaMarmita,
            setItensDaMarmita,
            valorMonetario,
            clickBotao,
            setClickBotao,
            aoClicar,
            totalDoPedido,
            setTotalDoPedido,
            tamanhoSelecionado,
            setTamanhoSelecionado,
            aoClicarTamanho,
            travaCarnes,
            setTravaCarnes,
            mostrarAlertaTamanho,
            mostraAlertaProdutos
        }} >
            {children}
        </ProdutosContext.Provider>
    )
    
    function listaItensMarmita( event, produto) {
        if (event.target.checked) {
            const temNaLista = produtosSelecionados.find(item => item.id === produto.id)
            if (temNaLista === undefined) {
                setProdutosSelecionados(valorAnterior => [...valorAnterior, produto])
            } else {
                const produtoRemovido = produtosSelecionados.filter((produtoFiltrado) => produtoFiltrado.id !== produto.id)
                setProdutosSelecionados(produtoRemovido)
            }
        } else {
            const produtoRemovido = produtosSelecionados.filter((produtoFiltrado) => produtoFiltrado.id !== produto.id)
            setProdutosSelecionados(produtoRemovido)
        }
    }

    function valorMonetario (valor) {
        
        const valorFormatado = valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        return valorFormatado
    }


    function aoClicar () {
        setClickBotao(!clickBotao)
    }

    function aoClicarTamanho (valor) {
        setTamanhoSelecionado(valor)
    }
    
    function mostrarAlertaTamanho() {
        return !tamanhoSelecionado ? window.alert("Selecione primeiro o tamanho da marmita!") : navigate("/produtos")
    }

    function mostraAlertaProdutos() {
        
        if (produtosSelecionados.length !== 0) {
            let alert = window.confirm("Você tem certeza que deseja finalizar seu pedido?")
            if (alert) {
                if (travaCarnes > 2) {
                    window.alert("Você selecionou mais de 2 carnes. Favor revisar seu pedido!")
                } else {
                    navigate("/carrinho")
                }
            }
        } else {
            window.alert("Monte sua Marmita antes de continuar!")
        }
    }

}
