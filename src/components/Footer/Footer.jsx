import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className="foot w-full ">
        <div className="row bg-gray-600 w-full ">
          <div>
            <h2 className="font-bold fa-2xl py-6">Get the freshCart app</h2>
            <p className="pb-5">
              We will send ypu a link,open it to download the app
            </p>
            <div className="flex justify-around flex-wrap mb-3 ">
              <input
                className="form-control rounded w-4/5 leading-none mb-2"
                type="email"
                placeholder="Email"
              />
              <button className="rounded  text-white bg-green-500 px-2 mr-5 md:flex-row flex-col ">
                Share app link
              </button>
            </div>
            <div className="flex justify-between ">
              <div className="flex flex-row ">
                <p className="py-8 mt-1 text-2xl">Payment partners</p>
                <div className="mt-7 px-6 py-3">
                  <ul className="flex flex-row md:flex-row flex-col flex-wrap w-full">
                    <li className="mx-5 cursor-pointer text-3xl ">
                      <i className="fa-brands fa-amazon-pay"></i>
                    </li>
                    <li className="mx-5 cursor-pointer text-3xl  ">
                      <i className="fa-brands fa-cc-mastercard"></i>
                    </li>
                    <li className="mx-5 cursor-pointer text-3xl  ">
                      <i className="fa-brands fa-cc-paypal"></i>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="flex flex-row justify-between"> */}
              {/* <div>
                  <p className="py-5">Get deliveries with FreshCart</p>
                </div> */}
              {/* <div className="mt-5 px-6">
                <ul className="flex flex-row">
                  <li className="mx-5 cursor-pointer"><i class="fa-brands fa-google-play"></i></li>
                  <li className="mx-5 cursor-pointer"><i class="fa-brands fa-app-store-ios"></i></li>
                </ul>
              </div> */}

              <section className="text-white body-font">
                <div className="container px-10 py-6 mx-auto flex  items-center md:flex-row flex-col flex-wrap">
                  <div className="flex flex-col  md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                    <h2 className="md:text-xl font-medium title-font text-gray-950">
                      Get deliveries with FreshCart
                    </h2>
                  </div>

                  <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 flex-wrap ">
                    <button className="bg-black inline-flex py-3 px-5 rounded-lg md:flex-row flex-col mb-4  items-center hover:bg-green-400 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 512 512"
                      >
                        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                      </svg>
                      <span className="ml-4 flex items-start flex-col leading-none ">
                        <span className="text-xs text-white mb-1">
                          GET IT ON
                        </span>
                        <span className="title-font font-medium">
                          Google Play
                        </span>
                      </span>
                    </button>
                    <button className="bg-black inline-flex py-3 px-5  rounded-lg md:flex-row flex-col mb-4  items-center hover:bg-green-400 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 305 305"
                      >
                        <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
                        <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
                      </svg>
                      <span className="ml-4 flex items-start flex-col leading-none ">
                        <span className="text-xs text-white mb-1">
                          Download on the
                        </span>
                        <span className="title-font font-medium"> 
                          App Store
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </section>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
