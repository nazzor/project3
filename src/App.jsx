import React from 'react'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import HeadlineCards from './components/HeadlineCards'
import Coupons from './components/Coupons'
import Category from './components/Category'
import Login from './pages/Login'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Slider />
      <HeadlineCards />
      <Coupons />
      <Category />
    </>
  )
}

export default App
