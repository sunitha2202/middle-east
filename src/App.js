import React, { useState, useEffect } from 'react';
import Head from './components/common/header/Head'
import './App.css';
import CardComponent from './pages/CardComponent';
import AspiringWomen1 from './pages/AspiringWomen1';
import ArticleList from './pages/ArticleCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aspiring from './pages/Aspiring';
import Home from './pages/Home';
import Beauty from './pages/Beauty';
import Business from './pages/Business';
import Lifestyle from './pages/Lifestyle';
import Magazine from './pages/Magazine';
import Cryptopreneur from './pages/Cryptopreneur';
import Fashion from './pages/Fashion';
import Fitness from './pages/Fitness';
import Event from './pages/Event';
// import Pagination from './pages/Pagination';

const App = () => {

  return (
    <div className='app'>
      <Router>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path="/Aspiring" element={<Aspiring />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/Business" element={<Business />} />
          <Route path='/Cryptopreneur' element={<Cryptopreneur />} />
          <Route path='/Events' element={<Event />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/Lifestyle" element={<Lifestyle />} />
          <Route path="/Magazines" element={<Magazine />} />




        </Routes>
      </Router>
    </div>

  )
}

export default App
