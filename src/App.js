import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { Main } from './components/Main';
import { Cars } from './components/Cars';
import  AppNav  from './components/AppNav';
import { API } from './apitest';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/api" element={<API />} />
    </Routes>
    </div>
  );
}

export default App;