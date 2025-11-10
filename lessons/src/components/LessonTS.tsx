import React, { useRef, useState, useEffect } from 'react'

//typescript lesson component

function LessonTS() {
  const [count, setCount] = useState(100);
  const prevCountRef = useRef(100);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const handleClick = () => {
    setCount((prev) => prev - 2);
  };

  return (
    <div >
      <h2>Current Count: {count}</h2>
      <h2>Previous Count: {prevCountRef.current ?? "—"}</h2>
      <button onClick={handleClick}>Decrease by 2</button>
    </div>
  );
}

export default LessonTS