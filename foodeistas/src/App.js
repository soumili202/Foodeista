
import './App.css';
import {Navbar} from './components/Navbar';
import {About} from './components/pages/About';
import {Contact} from './components/pages/Contact';
import {Home} from './components/pages/Home';
import {Restaurants} from './components/pages/Restaurants';
import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
     
     <div className= "container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/restaurants" element= {<Restaurants/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
