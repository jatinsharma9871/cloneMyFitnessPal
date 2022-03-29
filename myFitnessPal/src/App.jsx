import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Community } from './Components/community/community'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Community/>
    </div>
  )
}

export default App
