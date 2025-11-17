import { useState } from 'react'
import './App.css'
import Lesson0511 from './components/Lesson0511'
import LessonTS from './components/LessonTS'
import Lesson1211 from './components/Lesson1211'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Lesson0511 /> */}
      {/* <LessonTS /> */}
      <Lesson1211 />
    </>
  )
}

export default App
