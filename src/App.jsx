import { useState } from 'react'
import SidebySide from './components/SidebySide'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SidebySide />
    </>
  )
}

export default App
