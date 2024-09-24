import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './MainSlider.module.css'
import Slider from "react-slick";
import axios from 'axios';
import mainSlider from '../../assets/images/slider-image-3.jpeg'
import mainSlider1 from '../../assets/images/grocery-banner-2.jpeg'
import mainSlider2 from '../../assets/images/grocery-banner.png'
import slide1 from '../../assets/images/slider-image-1.jpeg'
import slide2 from '../../assets/images/slider-image-2.jpeg'


export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false
  };
  
  return <>
 <div className="row">
  <div className="w-3/4">
  <Slider {...settings}>
       
  <img src={mainSlider} className='w-full h-[400px]' alt="" />
  <img src={mainSlider1} className='w-full h-[400px]' alt="" />
  <img src={mainSlider2} className='w-full h-[400px]' alt="" />
          
        </Slider>

  </div>
  <div className="w-1/4">
  <img src={slide1} className='w-full h-[200px]' alt="" />
  <img src={slide2} className='w-full h-[200px]' alt="" />
  </div>
 </div>
  
  </>
}
