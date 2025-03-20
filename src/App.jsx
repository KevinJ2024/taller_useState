import { useState } from 'react'
import './App.css'
import { Footer } from './Layouts/Footer/Footer'
import { Header } from './Layouts/Header/Header'
import { Main } from './Pages/Main/Main'

function App() {
  const [bgColor, setBgColor] = useState('white')
  const [hfColor, setHfColor] = useState('black')
  const [textColor, setTextColor] = useState('black')

  const changeBgColor = () => {
    if (bgColor === 'white') {
      setBgColor('black')
    } else {
      setBgColor('white')
    }
  }

  const changeHfColor = () => {
    if (hfColor === 'black') {
      setHfColor('white')
    } else {
      setHfColor('black')
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
    <div id="main-container">
      <Header 
        bgColor={bgColor} 
        changeBgColor={changeBgColor} 
        hfColor={hfColor}
        changeHfColor={changeHfColor}
        textColor={textColor}
        changeTextColor={changeTextColor}
      />
      <Main bgColor={bgColor} textColor= {textColor} />
      <Footer hfColor={hfColor} textColor={bgColor} />
    </div>
  );
}

export default App;
