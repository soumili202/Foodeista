
import './App.css';
import React from 'react';
import {Navbar} from './components/Navbar';
import {About} from './components/pages/About';
import {Contact} from './components/pages/Contact';
import {Home} from './components/pages/Home';
import {Restaurants} from './components/pages/Restaurants';
import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" 
        element={<Home/>}>
        </Route>
        <Route path="/about" 
        element={<About/>}>
        </Route>
        <Route path="/contact" 
        element={<Contact/>}>
        </Route>
        <Route path="/restaurants" 
        element={<Restaurants/>}>
        </Route>
      </Routes>
     
     
    </div>
    </React.Fragment>
  );
}

export default App;
