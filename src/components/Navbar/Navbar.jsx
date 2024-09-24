import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./Navbar.module.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { CounterContext } from "../../Context/CounterContext.jsx";
import { UserContext } from "../../Context/UserContext.jsx";
import logo from "../../assets/images/logo.svg";
import { CartContext } from "../../Context/CartContext.jsx";

export default function Navbar() {
  let Navigate = useNavigate;
  let { counter, userName } = useContext(CounterContext);
  let { userLogin, setUserLogin } = useContext(UserContext);
  let { cart } = useContext(CartContext);

  function logOut() {
    localStorage.removeItem("userToken");
    setUserLogin(null);
    Navigate("/login");
  }

  return (
    <>
      <nav className="bg-gray-200 lg:fixed top-0 right-0 left-0 z-50 px-6">
        <div className="container mx-auto text-center flex flex-col lg:flex-row justify-between items-center capitalize py-4 ">
          <div className="flex flex-col lg:flex-row">
            <img src={logo} width={110} className="me-2" alt="" />

            <ul className="flex flex-col lg:flex-row">
              {userLogin !== null ? (
                <>
                  <li className="mx-2">
                    <NavLink to="">home</NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink to="cart">cart</NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink to="brands">brands</NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink to="products">products</NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink to="categories">categories</NavLink>
                  </li>
                </>
              ) : null}
            </ul>
          </div>

          <div className="flex flex-col lg:flex-row">
            <ul className="flex flex-col lg:flex-row">
              {/* <li className="mx-2 bg-lime-200">{counter}</li> */}

              {userLogin === null ? (
                <>
                  <li className="mx-2">
                    <NavLink to="register">register</NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink to="login">login</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className=" relative mx-2">
                    <NavLink to="cart"> 
                      <i className="fa-solid fa-2xl text-main fa-cart-shopping"></i>
                    </NavLink>
                    <span className="text-white absolute left-1/3 top-[-5px]">
                      {cart ? cart.numOfCartItems : 0}
                    </span>
                  </li>
                  <li onClick={logOut} className="mx-2 cursor-pointer">
                    logOut
                  </li>
                </>
              )}
              <li className="mx-2 space-x-4">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
