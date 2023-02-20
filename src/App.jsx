import { useState } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import Footer from './layouts/Footer';
import NavBar from './layouts/NavBar';
import NotFound from './layouts/NotFound';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <NavBar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
