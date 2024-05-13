import { useState } from "react";
import Home from './user/Home.jsx';
import Header from "./user/Header.jsx";
import Footer from "./user/Footer.jsx";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
