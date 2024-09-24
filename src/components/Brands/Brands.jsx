import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './Brands.module.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
import { Circles } from 'react-loader-spinner'




export default function Brands() {


  function getAllBrands()
  {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }

let {data , isLoading , isError , error} = useQuery({
queryKey:['brands' ],
queryFn:getAllBrands, 
staleTime:8000,
select:(data)=> data.data.data
})
if (isLoading)
  {
  return <div className="py-8 w-full flex justify-center">
    <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
  /> 
  </div>
  };
  // console.log(isLoading);
  
  if (isError)
    {
    return <div className="py-8 w-full flex justify-center">
     <h3>{error}</h3>
    </div>
    };
    // console.log(isError);


  
    
  
  return <>

<div className="row">
        {data?.map((brand , _id) => (
          <div key={_id} className="w-1/6 px-4">
            <div className="brand py-4">
            <Link to={`/specificBrand/${brand._id}/${brand.name}`}>
              <img  className="w-full cursor-pointer" src={brand.image} alt={brand.slug} />
              <span className="block font-light text-green-600">{brand.name}</span>
              </Link>
            </div>  
          </div>
        ))}  
      </div>
  
  </>
}
