import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Games from '../pages/Games';

const PageRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Games />} />
    </Routes>
  );
};

export default PageRoutes;
