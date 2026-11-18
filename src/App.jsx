import { useState } from 'react'
import SidebySide from './components/SidebySide'
import './App.css'
import EnterText from './components/EnterText'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SidebySide />
      <EnterText/>
    </>
  )
}

export default App
