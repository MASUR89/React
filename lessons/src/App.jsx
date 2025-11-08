import { useState } from 'react'
import './App.css'
import Lesson0511 from './components/Lesson0511'
import LessonTS from './components/LessonTS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Lesson0511 /> */}
      <LessonTS />
    </>
  )
}

export default App
