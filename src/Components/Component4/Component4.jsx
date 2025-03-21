import { useState, useEffect } from "react"
import './Component4.css'

export const Component4 = () => {

  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000)
    } else {
      setCount(0)
    }
    return () => clearInterval(interval);
  }, [isRunning])

  return (
    <div id="div-4">
      <h1 id="text-4">Time: {count} seconds</h1>
      <button className="button4" onClick={() => setIsRunning(true)}>start</button>
      <button className="button4" onClick={() => setIsRunning(false)}>reset</button>
    </div>
  )
}