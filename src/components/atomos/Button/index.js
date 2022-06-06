import './index.css'

const Button = ({funcGame, children}) => {
  return (
    <>
        <button className='btn' onClick={funcGame}>{children}</button>
    </>
  )
}

export default Button