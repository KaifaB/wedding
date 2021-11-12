import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//import Pages
import Home from './Pages/Home'
import RSVP from './Pages/RSVP'
import Registry from './Pages/Registry'
import Info from './Pages/Info'
import Whole from './Pages/Whole'
//import Component(s)
import Nav from './Components/Nav'
import Footer from './Components/Footer'
//import CSS file
import './App.css'

class App extends Component {
  render() {
    return(
      <div>
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info" element={<Info />} />
              <Route path="/registry" element={<Registry />} />
              <Route path="/rsvp" element={<RSVP />} />
              <Route path="/new" element={<Whole />} />
            </Routes>
          <Footer />
        </Router>
      </div>
    )
  };
}

export default App;
