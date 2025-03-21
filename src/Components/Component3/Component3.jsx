import './Component3.css'
import { useState } from 'react'

export const Component3 = () => {

    const AbsoluteColor = [
        "#FF0000",     // Rojo
        "#00FF00",     // Verde
        "#0000FF",     // Azul
        "#FFFF00",     // Amarillo
        "#FF00FF",     // Magenta
        "#00FFFF",     // Cian
        "#000000",     // Negro
        "#FFFFFF",     // Blanco
        "#808080",     // Gris
        "#800000",     // Marrón oscuro
        "#808000",     // Oliva
        "#800080",     // Púrpura
        "#008080",     // Verde azulado
        "#C0C0C0",     // Plata
        "#FFA500",     // Naranja
        "#A52A2A"      // Marrón
        ]

    const [bgColor, setBgColor] = useState(AbsoluteColor[Math.floor(Math.random() * (AbsoluteColor.length - 0))])

        const changeBgColor = (event) => {
            setBgColor(event.target.value)
        }

        const randomBgColor = () => {
            setBgColor(AbsoluteColor[Math.floor(Math.random() * (AbsoluteColor.length - 0))])
        }

    return (
        <div id='div-3' style={{ backgroundColor: bgColor}}>
            <h1 id='text-3'>Color now is: {bgColor}</h1>
            <div id='box-options'>
            <select onChange={changeBgColor} id="select">
                {AbsoluteColor.map((color) => (
                <option key={color} value={color} style={{ backgroundColor: color }}>
                    {bgColor}
                </option>
                ))}
            </select>
            <button id='button3' onClick={randomBgColor}>Random Color</button>
            </div>
        </div>
    )
}