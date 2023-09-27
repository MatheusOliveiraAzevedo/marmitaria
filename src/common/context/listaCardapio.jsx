import { createContext, useState } from "react";

export const CardapioContext = createContext();


export const ListaCardapioProvider = ({ children }) => {
    const [listaCardapio, setListaCardapio] = useState([
        {
            "nome": "Arroz",
            "id": 0,
            "valor": 0,
            "categoria": 0,
            "selecao": false
        },
        {
            "nome": "Feijão",
            "id": 1,
            "valor": 0,
            "categoria": 0,
            "selecao": false
        },
        {
            "nome": "Macarrão",
            "id": 2,
            "valor": 0,
            "categoria": 0,
            "selecao": false
        },
        {
            "nome": "Pure de Batata",
            "id": 3,
            "valor": 0,
            "categoria": 0,
            "selecao": false
        },
        {
            "nome": "Bife Bovino",
            "id": 4,
            "valor": 0,
            "categoria": 1,
            "selecao": false
        },
        {
            "nome": "Filé de Frango Grelhado",
            "id": 5,
            "valor": 0,
            "categoria": 1,
            "selecao": false
        },
        {
            "nome": "Frango Xadrez",
            "id": 6,
            "valor": 0,
            "categoria": 1,
            "selecao": false
        },
        {
            "nome": "Carne de Panela",
            "id": 7,
            "valor": 0,
            "categoria": 1,
            "selecao": false
        },
        {
            "nome": "Alface",
            "id": 8,
            "valor": 0,
            "categoria": 2,
            "selecao": false
        },
        {
            "nome": "Tomate",
            "id": 9,
            "valor": 0,
            "categoria": 2,
            "selecao": false
        },
        {
            "nome": "Salada de Cebola",
            "id": 10,
            "valor": 0,
            "categoria": 2,
            "selecao": false
        },
        {
            "nome": "Coca-Cola",
            "id": 11,
            "valor": 8,
            "categoria": 3,
            "selecao": false
        },
        {
            "nome": "Coca-Cola Zero",
            "id": 12,
            "valor": 8,
            "categoria": 3,
            "selecao": false
        },
        {
            "nome": "Pepsi",
            "id": 13,
            "valor": 6,
            "categoria": 3,
            "selecao": false
        },
        {
            "nome": "Pepsi Sem Açucar",
            "id": 14,
            "valor": 6,
            "categoria": 3,
            "selecao": false
        },
        {
            "nome": "Guarana Antartica",
            "id": 15,
            "valor": 0,
            "categoria": 5,
            "selecao": false
        },
        {
            "nome": "Agua",
            "id": 16,
            "valor": 2,
            "categoria": 3,
            "selecao": false
        },
        {
            "nome": "Agua com gás",
            "id": 17,
            "valor": 3,
            "categoria": 3,
            "selecao": false
        }
    ])

    const [categoriaMenu, setCategoriaMenu] = useState([
        {
            "nome": "Acompanhamentos",
            "selecao": true,
            "id": 0
        },
        {
            "nome": "Carnes",
            "selecao": false,
            "id": 1
        },
        {
            "nome": "Saladas",
            "selecao": false,
            "id": 2
        },
        {
            "nome": "Bebidas",
            "selecao": false,
            "id": 3
        }
    ])
    const [tamanhos, setTamanhos] = useState([
        {
            "nome": "MUITO GRANGE",
            "valor": 30,
            "id": 0
        },
        {
            "nome": "GRANDE",
            "valor": 23,
            "id": 1
        },
        {
            "nome": "MÉDIO",
            "valor": 18,
            "id": 2
        },
        {
            "nome": "PEQUENO",
            "valor": 10,
            "id": 3
        }
    ])

    const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
    const listaMenuSelecionada = listaCardapio.filter(produto => produto.categoria === categoriaSelecionada);
    const [exibeMenu, setExibeMenu] = useState(false);
    

    return (
        <CardapioContext.Provider value={{
            listaCardapio,
            setListaCardapio,
            AlteraBorda,
            categoriaSelecionada,
            setCategoriaSelecionada,
            listaMenuSelecionada, 
            categoriaMenu,
            exibeMenu,
            setExibeMenu,
            AlteraBordaMenu,
            tamanhos,
            setTamanhos
        }}>
            {children}
        </CardapioContext.Provider>
    )

    function AlteraBorda(id) {


        listaCardapio.map(item => {
            if (!item.selecao) {
                item.id === id ? item.selecao = true : ""
            } else {
                item.id === id ? item.selecao = false : ""
            }
        })
    }
    function AlteraBordaMenu(id) {

     

        categoriaMenu.map(item => {
            if (!item.selecao) {
                item.id === id ? item.selecao = true : ""
                // setExibeMenu(false)
            } else {
                item.id !== id ? item.selecao = false : ""
            }
        })
    }



    
}

