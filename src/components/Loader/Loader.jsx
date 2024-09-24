import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './Loader.module.css'
import { Circles } from 'react-loader-spinner'

 

export default function Loader() {
  
  const [count, setCount] = useState(0)

  useEffect(() => {} , []) 
  
  return <>
<Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
  />
  
  </>
}
