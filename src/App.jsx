import { useState } from "react";
import Home from './user/Home.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
