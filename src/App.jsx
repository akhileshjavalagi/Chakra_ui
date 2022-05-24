import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Layouts from './compnents/Layouts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Layouts/>
    </div>
  )
}

export default App
