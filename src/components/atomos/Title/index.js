import { useState } from "react";
import styles from './index.module.css'

const Title = ({customTitleProp}) => {
    const stringTitle = 'Secretword'
    const stringTitleArray = stringTitle.split('')
    const [title] = useState(stringTitleArray);
        
  return (
    <>
        <h1>{title.map((word, index) => {
          if ((index + 1) % 2 === 0) {
           return (<span className={styles[customTitleProp]} key={index}>{word}</span>)
          }else {
            return (<span className={styles[customTitleProp]} style={{position: "relative", top: "10px"}}key={index}>{word}</span>)
          }            
        })}</h1>
    </>
  )
}

export default Title