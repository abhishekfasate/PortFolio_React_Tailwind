import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Navbar from "./Components/Navbar" 
import Picas from "./Components/Picas"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Contacts from "./Components/Contacts"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes >
          <Route path="/" exact component={<Picas/>} />
          <Route path="/about" component={<About/>} />
          <Route path="/skills" component={<Skills/>} />
          <Route path="/contacts" component={<Contacts/>} />
        </Routes>
        <Picas />
        <About/>
        <Skills/>
        <Contacts/>
      </div>
    </Router>
  );
}

export default App;
