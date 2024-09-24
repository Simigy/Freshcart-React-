import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./Layout.module.css";
import Navbar from "./../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />

<div className="container mx-6 py-14">
<Outlet></Outlet>
</div>

      <Footer />
    </>
  );
}
 