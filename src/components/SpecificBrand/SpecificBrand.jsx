import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './SpecificBrand.module.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import { Circles } from 'react-loader-spinner'








export default function SpecificBrand() {

  const { id: brandId } = useParams(); // Destructure params
  
  // function getSpecificBrand(brand_id)
  // {
  //   return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${brand_id}`)
  // }

  const getSpecificBrand = async (brand_id) => {
    try {
      const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${brand_id}`);
      return response.data.data; // Adjust based on your API response structure
    } catch (error) {
      console.error("Error fetching brand data:", error); // Log error for debugging
      throw error; // Rethrow to be caught by react-query
    }
  };

  let {data , isLoading , isError , error} = useQuery({
    queryKey:['specificBrand' , brandId],
    queryFn:() => getSpecificBrand(brandId),
    staleTime:8000,
    // select:(data)=> data.data.data
    })

    if (isLoading)
      {
      return <div className="py-8 w-full flex justify-center">
          <Circles
  height="80"
  width="80"
  color="red"
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
         <h3>{error?.message || 'An error occurred while fetching data.'}</h3>
        </div>
        };
        // console.log(isError);
  
  return <>
       {/* <h1 className='text-5xl'>Specific Brand</h1> */}
      {data ? (
        <div>
          <img src={data.image} alt="data.name" />
          <h2>{data.name}</h2> 
          {/* <p>{data.slug}</p> Adjust based on your API response */}
        </div>
      ) : (
        <>
        <img src={data.image} alt="data.name" />
        <p>No data available</p>
        </>
      )}
  
  </>
}
