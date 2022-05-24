import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Layouts from './compnents/Layouts'
import Layout2 from './compnents/Layout2'
import Layout3 from './compnents/Layout3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Layouts/>
    <Layout2/>
    <Layout3/>
    </div>
  )
}

export default App
