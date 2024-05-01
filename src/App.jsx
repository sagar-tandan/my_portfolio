import { useState } from "react";
import Home from './user/Home.jsx';
import WhatIdo from "./user/WhatIdo.jsx";
import Professional from "./user/Professional.jsx";
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whatido" element={<WhatIdo />} />
      <Route path="/jpt" element={<Professional />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
