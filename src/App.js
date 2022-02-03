import './Styles/Style.css'
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import MainContainer from './Sections/MainContainer';
function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
            <Routes>
              <Route path='/' element={<MainContainer/>} /> 
            </Routes>
            <Footer/>

      </Router>
    </div>
  );
}

export default App;
