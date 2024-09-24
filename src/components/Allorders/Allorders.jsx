import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './Allorders.module.css'
import { CartContext } from '../../Context/CartContext'



export default function Allorders() {
  
  const [count, setCount] = useState(0)

  let {clearCart} = useContext(CartContext);

  useEffect(() => {
    clearCart()
  } , []) 
  
  return <>
  <h1 className='text-5xl'>Allorders</h1>
  
  </>
}
