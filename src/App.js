import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from './Top';
import Trending from './Trending';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Top/>}/>
      <Route path='/trend' element={<Trending/>}/>
    </Routes>
  );
}

// Assuming you have a UserProvider, otherwise comment this out for now
function AppWrap() {
  return (
    <BrowserRouter>
      {/* <UserProvider> */}
        <App />
      {/* </UserProvider> */}
    </BrowserRouter>
  );
}

export default AppWrap;
