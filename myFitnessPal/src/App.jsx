import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import BeforeAbout from './Components/BeforeAbout/BeforeAbout'
import BeforeFood from './Components/BeforeFood/BeforeFood'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <BeforeAbout/> */}
      <BeforeFood/>
    </div>
  )
}

export default App
