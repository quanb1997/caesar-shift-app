import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Encrypt from './components/Encrypt'
import Footer from './components/Footer' 
import About from './components/About' 

function App() {
  return (
    <Router>
      <div className="container">

        <Routes>
          <Route path='/caesar-shift-app' element = {
            <>
              <Header title = "Caesar Shift Calculator" />
              <Encrypt onInput={readInput}/>
            </>
          }/>
          <Route path='/about' element={<About />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const readInput = (form_input) => {
  console.log(form_input);
}

export default App;
