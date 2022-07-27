import React from 'react'
import Navi from '../../layouts/navi/Navi'
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Search from '../search/Search';

const Main = () => {
  return (
    <div>
      <Navi />

      <Routes>
        <Route path='' element={<Home />} />
        <Route path='search' element={<Search />} />
      </Routes>

      Main</div>
  )
}

export default Main