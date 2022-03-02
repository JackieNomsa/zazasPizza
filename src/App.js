import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import Stores from "./components/Stores";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/stores' element={<Stores/>}/>
        <Route path='/specials' element={<Specials/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
