import { ContainerCabecalho, Imagem } from './styles'; 
import logo from '../../assets/logo.png'

const Cabecalho = () => {
    return (
        <ContainerCabecalho>
            <Imagem src={logo}></Imagem>
            <h1>Marmitaria</h1>
        </ContainerCabecalho>
    )
}

export default Cabecalho