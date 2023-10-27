import React from 'react'
import Banner from '../components/Banner'
import bannerWatch from "../assets/bannerWatch.jpg"

const HomeScreen = () => {
  return (
    <>
        <Banner image={bannerWatch} title="Class and Elegance Combined" buttonText="Shop Now" />
    </>
  )
}

export default HomeScreen