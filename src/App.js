import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    console.log('init', a, b)
  }, [b])

  const increaseA = () => { setA(a+1)}
  const increaseB = () => { setB(b+1)}
  
  return (
    <div className="App">
      <h1>useEffect() Example</h1>
      
      <div>a = {a} <button onClick={(increaseA)}>Increase Value</button></div>
      <div>b = {b} <button onClick={(increaseB)}>Increase Value</button></div>





    </div>
  );
}

export default App;
