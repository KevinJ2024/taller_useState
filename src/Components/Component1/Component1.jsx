import { useState } from 'react'
import './Component1.css'

export const Component1 = () =>{

    const [bgColor, setBgColor] = useState('white')
    const [textColor, setTextColor] = useState('black')
  
    const changeBgColor = () => {
      if (bgColor === 'white') {
        setBgColor('black')
      } else {
        setBgColor('white')
      }
    }
  
    const changeTextColor = () => {
      if (textColor === 'black') {
        setTextColor('white')
      } else {
        setTextColor('black')
      }
    }

    return (
        <div id='div-1' style={{ backgroundColor: bgColor }}>
            <button id='button1' onClick={() => { changeBgColor(); changeTextColor(); }}
            style={{ "backgroundColor": textColor, "color": bgColor }}
            >Change background</button>
        </div>
    )
}