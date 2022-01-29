 import React from 'react';
import Header from './component/Header';
import Mounting from './component/Mounting';
import Unmounting from './component/Unmounting';
import Updating from './component/Updating';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
 
 const App = () => {
   return <div>

<BrowserRouter>
<Header/>
    <Routes>
      
        <Route path="/mounting" element={<Mounting />} />

        <Route path="/updating" element={   <Updating/>} />

        <Route path="/unmounting" element={   <Unmounting/>} />


       
 
    </Routes>
  </BrowserRouter>
     
   </div>;
 };
 
 export default App;
 