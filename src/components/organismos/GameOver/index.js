import Button from '../../atomos/Button'
import Title from '../../atomos/Title'
import styles from './index.module.css'

const GameOver = ({resetGame, score}) => {
  return (
    <div>
        <Title customTitleProp='max-title'>GameOver</Title>
        <h2 className={styles['final-score']}>Sua pontuação foi: {score}</h2>
        <Button funcGame={resetGame}>Resetar</Button>   
    </div>
  )
}

export default GameOver