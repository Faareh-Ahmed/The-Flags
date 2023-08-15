import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Home from './Pages/Home';
import CountryDetails from './Pages/CountryDetails';
import './App.css'
import Header from './Components/Header';
// import SearchBar from './Components/SearchBar';
function App() {
    return (
      <>
    
        <Router>
          <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/countries/:countryCode" element={<CountryDetails />} />
                <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
