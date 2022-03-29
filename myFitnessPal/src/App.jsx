import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import BeforeAbout from './Components/BeforeAbout/BeforeAbout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BeforeAbout/>
    </div>
  )
}

export default App
