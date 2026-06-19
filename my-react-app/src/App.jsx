import { useState } from 'react';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  
   const [counter, setCounter] = useState(15);

  function addButton() {
    setCounter(counter+1);
    
  }

  return (
    <>
      <h1>My React App</h1>
      <UserCard />
      <h1>Counter value is {counter}</h1>
      <button onClick={addButton}>Add Counter</button>
    </>
  );
}

export default App