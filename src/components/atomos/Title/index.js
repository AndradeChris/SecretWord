import { useState } from "react";
import './index.css'

const Title = () => {
    // const [stringTitle, setStringTitle] = useState("SecretWord");
    const [title, setTitle] = useState(['S', 'E', 'C', 'R', 'E', 'T', 'W', 'O', 'R', 'D']);

    
  return (
    <>
        <h1>{title.map((word, index) => (
            <span className="letter-title" key={index}>{word}</span>
        ))}</h1>
    </>
  )
}

export default Title