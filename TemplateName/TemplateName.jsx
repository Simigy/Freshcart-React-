import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './TemplateName.module.css'



export default function TemplateName() {
  
  const [count, setCount] = useState(0)

  useEffect(() => {} , []) 
  
  return <>
  <h1 className='text-5xl'>TemplateName</h1>
  
  </>
}
