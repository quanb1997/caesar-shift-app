import React from 'react'
import Header from './components/Header'
import Encrypt from './components/Encrypt'

function App() {
  return (
    <div className="container">
        <Header subtitle = {"Quan"}/>
        <Encrypt onInput={doCaesarShift}/>
    </div>
  );
}

// Shift red text
const doCaesarShift = (red_text, shift) => {
  console.log(red_text);
}

export default App;
