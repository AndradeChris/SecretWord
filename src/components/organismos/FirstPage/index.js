import Button from '../../atomos/Button'
import Title from '../../atomos/Title'
import Instrucoes from '../../atomos/Instrucoes'

import './index.css'

const FirstPage = ({startGame}) => {
  return (
    <div className='container'>
        <Title />
        <Instrucoes />
        <Button funcGame={startGame}>Começar</Button>        
    </div>
  )
}

export default FirstPage