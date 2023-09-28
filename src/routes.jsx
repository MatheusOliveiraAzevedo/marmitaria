import { Route, Routes } from 'react-router-dom'
import Produtos from './pages/produtos'
import { ProdutosProvider } from './common/context/produtos'
import { ListaCardapioProvider } from './common/context/listaCardapio'
import EstilosGlobais from './componentes/EstilosGlobais'
import Tamanhos from './pages/Tamanhos'
import Inicio from './pages/Inicio'
import CarrinhoMarmita from './pages/CarrinhoMarmita'

function AppRouter() {
  return (
    <ProdutosProvider>
      <EstilosGlobais />
      <ListaCardapioProvider>
        <Routes>
          <Route path='/' element={<Inicio />}>
            <Route path='/' element={<Tamanhos />} />
            <Route path='/produtos' element={<Produtos />} />
            <Route path='/carrinho' element={<CarrinhoMarmita />} />
          </Route>
        </Routes>
      </ListaCardapioProvider>
    </ProdutosProvider>
  )
}

export default AppRouter
