import React, { useRef, useState, useEffect } from 'react'

function LessonTS() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  
  const nameRef = useRef("");
  const numberRef = useRef("");
  const monthRef = useRef("");
  const yearRef = useRef("");
  const cvcRef = useRef("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameRef.current = e.target.value;
    numberRef.current = e.target.value;
    monthRef.current = e.target.value;
    yearRef.current = e.target.value;
    cvcRef.current = e.target.value;
    
  };

  function handleSubmit() {
    setName(nameRef.current);
    setNumber(numberRef.current);
    setMonth(monthRef.current);
    setYear(yearRef.current);
    setCvc(cvcRef.current);
  }

  useEffect(() => {
  
  }, []);

  return (
    <div>
      <h2>track data</h2>
      <input type="text" onChange={handleChange} placeholder='name' />
      <input type="text" onChange={handleChange} placeholder='number' />
      <input type="text" onChange={handleChange} placeholder='month' />
      <input type="text" onChange={handleChange} placeholder='year' />
      <input type="text" onChange={handleChange} placeholder='cvc' />
      <button onClick={handleSubmit}>Show text</button>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <p>Month: {month}</p>
      <p>Year: {year}</p>
      <p>CVC: {cvc}</p>
    </div>
  );
}

export default LessonTS