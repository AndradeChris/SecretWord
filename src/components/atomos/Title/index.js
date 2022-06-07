import { useState } from "react";
import './index.css'

const Title = () => {
    // const [stringTitle, setStringTitle] = useState("SecretWord");
    const [title, setTitle] = useState(['S', 'E', 'C', 'R', 'E', 'T', 'W', 'O', 'R', 'D']);

    
  return (
    <>
        <h1>{title.map((word, index) => {
          if ((index + 1) % 2 === 0) {
           return (<span className="letter-title" key={index}>{word}</span>)
          }else {
            return (<span className="letter-title" style={{position: "relative", top: "10px"}}key={index}>{word}</span>)
          }            
        })}</h1>
    </>
  )
}

export default Title