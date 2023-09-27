import React from 'react'
import { ContainerRodape } from './styles'
import { BsWhatsapp } from 'react-icons/bs'

const Rodape = () => {
    return (
        <ContainerRodape>
            <div>
                <BsWhatsapp />
                <span> (xx) xxxxx-xxxx </span>
            </div>
        </ContainerRodape>
    )
}

export default Rodape