import React from 'react'
import Header from './components/Header'
import Encrypt from './components/Encrypt'

function App() {
  return (
    <div className="container">
        <Header title = "Caesar Shift Calculator" />
        <Encrypt onInput={doCaesarShift}/>
    </div>
  );
}

const doCaesarShift = (form_input) => {
  console.log(form_input);
}

export default App;
