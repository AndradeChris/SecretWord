import Button from '../../atomos/Button'
import Title from '../../atomos/Title'

const GameOver = ({resetGame, score}) => {
  return (
    <div>
        <Title customTitleProp='max-title'>GameOver</Title>
        <h2>Sua pontuação foi: {score}</h2>
        <Button funcGame={resetGame}>Resetar</Button>   
    </div>
  )
}

export default GameOver