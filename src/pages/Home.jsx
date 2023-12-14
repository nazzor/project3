import React from 'react'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import HeadlineCards from '../components/HeadlineCards'
import Coupons from '../components/Coupons'
import Category from '../components/Category'
import Footer from '../components/Footer'

function Home() {
    return (
      <>
        <NavBar />
        <Slider />
        <HeadlineCards />
        <Coupons />
        <Category />
        <Footer />
      </>
    )
  }
export default Home