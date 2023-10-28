import React from 'react'
import Banner from '../components/Banner'
import bannerWatch from "../assets/bannerWatch.jpg"
import Sercives from '../components/Services/Sercives'

const HomeScreen = () => {
  return (
    <>
        <Banner image={bannerWatch} title="Class and Elegance Combined" buttonText="Shop Now" />
        <Sercives />
    </>
  )
}

export default HomeScreen