import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './Products.module.css'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader.jsx'
import { Circles } from 'react-loader-spinner'




export default function Products() {

  function getRecent()
  {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

let {data , isError , error , isLoading , isFetching} = useQuery({
queryKey:['recentProducts'],
queryFn:getRecent,
staleTime:80000
})

if (isLoading)
  {
  return <div className="py-8 w-full flex justify-center">
    <Loader color='red' />
  </div>
  };
  console.log(isLoading);
  
  if (isError)
    {
    return <div className="py-8 w-full flex justify-center">
     <h3>{error}</h3>
    </div>
    };
    console.log(isError);
    
  
  return <>
      <div className="row">
        {data?.data.data.map((product) => (
          <div key={product.id} className="w-1/6 px-4">
            
            <div className="product py-4">
              <Link to={`/productdetails/${product.id}/${product.category.name}`}>
              <img className="w-full" src={product.imageCover} alt={product.title} />
              <span className="block font-light text-green-600">{product.category.name}</span>
              <h3 className="text-lg font-normal text-gray-800">{product.title.split(' ').slice(0,2).join(' ')}</h3>

              <div className="flex justify-between">
                <span>{product.price} EGP </span> 
                <span> <i className="fas fa-star text-yellow-500"></i> {product.ratingsAverage}</span>
              </div>
              <div className="btn">Add to cart</div>
              </Link>
            </div>
          </div>
        ))}  
      </div>
    </>
}
