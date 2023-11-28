
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
     
     
    </div>
    </React.Fragment>
  );
}

export default App;
