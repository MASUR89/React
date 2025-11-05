import { useState } from 'react'
import './App.css'
import Lesson0511 from './components/Lesson0511'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lesson0511 />
    </>
  )
}

export default App
