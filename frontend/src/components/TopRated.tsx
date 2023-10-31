import React from 'react'
import { useGetTopRatedQuery } from '../slices/productsApiSlice'
import ProductsGrid from './Products/ProductsGrid'

const TopRated = () => {

    const { data: topRatedProductsData } = useGetTopRatedQuery({})

  return (
    <section className='topRated container my-5' id='topRated'>
        <h1 className='topRated__title mb-4'>Top Rated Products</h1>
        <ProductsGrid productsData={topRatedProductsData!} />
    </section>
  )
}

export default TopRated