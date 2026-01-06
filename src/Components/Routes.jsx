import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from '../Pages/Hero';
import PortfolioPage from '../Pages/Portfolio';

const RouteAll = () => {
  return (
   <Routes>
<Route path='/' element={<Hero></Hero>}></Route>
<Route path='/work' element={<PortfolioPage></PortfolioPage>}></Route>
   </Routes>
  )
}

export default Routes;
