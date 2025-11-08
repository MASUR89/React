import React from 'react'

//typescript lesson component

type UserProps = {
  name: string
  age: number
  isAdmin: boolean
  price?: number
}
const LessonTS = ({name, age, isAdmin, price}:UserProps) => {
  
  return (
    <div>
      <h2>TypeScript Lesson Component</h2>
      <h3>{name}</h3>
      <h3>{age}</h3>
    </div>
  )
}

export default LessonTS