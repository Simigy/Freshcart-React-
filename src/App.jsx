import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Brands from "./components/Brands/Brands";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Category from "./components/Category/Category";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import { CounterContextProvider } from "./Context/CounterContext.jsx";
import { UserContextProvider } from "./Context/UserContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartContextProvider from "./Context/CartContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Checkout from './components/Checkout/Checkout';
import Allorders from './components/Allorders/Allorders';
import { Offline, Online } from "react-detect-offline";
import SpecificBrand from './components/SpecificBrand/SpecificBrand';




let query = new QueryClient();

let routers = createBrowserRouter([
  {
    path: "",element: <Layout />,children: [
      {index: true,element: (<ProtectedRoute><Home /></ProtectedRoute>), },
      {path: "cart",element: (<ProtectedRoute><Cart /></ProtectedRoute>),},
      {path: "brands",element: (<ProtectedRoute><Brands /></ProtectedRoute>),},
      {path: "specificbrand/:id/:name",element: (<ProtectedRoute><SpecificBrand /></ProtectedRoute>),},
      {path: "categories",element: (<ProtectedRoute><Category /></ProtectedRoute>),},
      {path: "products",element: (<ProtectedRoute><Products /></ProtectedRoute>),},
      {path: "checkout",element: (<ProtectedRoute><Checkout /></ProtectedRoute>),},
      {path: "allorders",element: (<ProtectedRoute><Allorders /></ProtectedRoute>),},
      {path: "productdetails/:id/:category",element: (<ProtectedRoute><ProductDetails /></ProtectedRoute>),},
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={query}>
      <UserContextProvider>
        <CounterContextProvider>
          <CartContextProvider>
            <RouterProvider router={routers}></RouterProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
            <Toaster/>
            {/* <Online>Only shown when you're online</Online> */}
            <Offline>
              <div className="fixed bottom-4 start-4 p-4 bg-yellow-200 rounded-md">
              Only shown offline (surprise!)
              </div>
            </Offline>
          </CartContextProvider>
        </CounterContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
