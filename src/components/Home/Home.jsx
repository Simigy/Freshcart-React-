import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./Home.module.css";
import { CounterContext } from "./../../Context/CounterContext";
import RecentProducts from "./../RecentProducts/RecentProducts";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider.jsx";
import MainSlider from "../MainSlider/MainSlider.jsx";
import Loader from "../Loader/Loader.jsx";
import Products from './../Products/Products';

export default function Home() {
  let { counter, setCounter } = useContext(CounterContext);

  return (
    <>
      <MainSlider />
      <CategoriesSlider />
      <RecentProducts />
    </>
  );
}
