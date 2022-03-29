import { useState } from 'react'
import {Header} from "./Components/Header/Header"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App
