import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./CategoriesSlider.module.css";
import Slider from "react-slick";
import axios from "axios";

export default function CategoriesSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: true,
  };

  const [categories, setCategories] = useState([]);

  async function getCategories() {
    await axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then(({ data }) => {
        // console.log(data.data);
        setCategories(data.data);
      })

      .catch((error) => {});
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="py-5">
        <h2 className="py-4 text-lg text-gray-800 font-bold">
          Shop popular categories
        </h2>
        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category}>
              <img
                className="category-img w-full"
                src={category.image}
                alt={category.name}
              />
              <h3 className="py-2">{category.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
