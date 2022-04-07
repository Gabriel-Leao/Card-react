import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Teste from './components/usecard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Teste />
    </div>
  )
}

export default App
