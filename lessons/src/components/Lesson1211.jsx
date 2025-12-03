import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useReducer, useContext } from 'react';


const initialState = {count: 0};

  function reducer(state, action) {
    if (action.type === 'increment') {
      return {count: state.count + 1};
    } 
    if (action.type === 'decrement') {
      return {count: state.count - 1};
    }
    if (action.type === 'multiply') {
      return {count: state.count * 2};
    }
    if (action.type === 'divide') {
      return {count: state.count / 2};
    }
    return state;

  }
const Lesson1211 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type: 'multiply'})}>Multiply</button>
      <button onClick={() => dispatch({type: 'divide'})}>Divide</button>
    </div>
  )

}

export default Lesson1211