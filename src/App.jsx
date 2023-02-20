import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {
        import.meta.env?.VITE_APP_NAME ?
        <h1>{ import.meta.env?.VITE_APP_NAME }</h1>
        :
        <p>Please set the environment variable "VITE_APP_NAME" before building the assets</p>
      }

      {
        import.meta.env?.VITE_ENABLE_PARAGRAPH === "1" &&
        <p>This paragraph will only appear if the VITE_ENABLE_PARAGRAPH environment variable is set to true</p>
      }
    </div>
  )
}

export default App
