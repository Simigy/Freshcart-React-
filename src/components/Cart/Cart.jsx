import React, {useContext} from "react";
import {useEffect} from "react";
import {useState} from "react";
import style from "./Cart.module.css";
import axios from "axios";
import {CartContext} from "../../Context/CartContext.jsx";
import Loader from "./../Loader/Loader";
import {Link} from 'react-router-dom';

export default function Cart() {
    // const [loading, setLoading] = useState(false);

    let {
        getLoggedUserCart,
        updateProductCount,
        deleteProduct,
        loading,
        cart,
        getCart,
    } = useContext(CartContext);

    useEffect(() => {
        console.log("cart", cart);
    }, [cart]);

    // async function getCartItems() {
    //   let response = await getLoggedUserCart();
    //   // console.log(response.data.data);
    //   setCartDetails(response?.data);
    // }

    // async function updateCartCount(productId, count) {
    //   let response = await updateProductCount(productId, count);
    //   console.log(response?.data.data);
    //   setCartDetails(response);
    // }

    // useEffect(() => {
    //   getCartItems();
    // }, []);

    // async function deleteItems(productId) {
    //   let response = await deleteProduct(productId);
    //   // console.log(response.data.data);
    //   setCartDetails(response?.data);
    // }

    if (!cart || !cart.data) return (
        <div className="flex justify-center py-20">
            <Loader/>
        </div>
    );

    if (!cart.data.products?.length) return (
        <h2 className="text-center font-semibold text-2xl text-black">Cart is Empty</h2>
    );

    return (
        <div className="relative overflow-x-auto sm:rounded-lg">
            <h2 className="text-center text-green-800 py-5 text-3xl">
                Shopping cart
            </h2>
            <h3 className="text-center text-lg text-slate-600">
                Total cart price :{cart?.data.totalCartPrice} EGP
            </h3>
            <table className="w-3/4 mx-auto my-6 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-16 py-3">
                        <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {cart?.data.products.map((product) => (
                    <tr
                        key={product._id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td className="p-4">
                            <img
                                src={product.product.imageCover}
                                className="w-16 md:w-32 max-w-full max-h-full"
                                alt={product.title}
                            />
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {product.title}
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <button
                                    onClick={() =>
                                        updateProductCount(
                                            product.product._id,
                                            product.count - 1
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    type="button"
                                >
                                    <span className="sr-only">Quantity button</span>
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 2"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 1h16"
                                        />
                                    </svg>
                                </button>
                                <div>
                                    <span>{product.count}</span>
                                </div>
                                <button
                                    onClick={() =>
                                        updateProductCount(
                                            product.product._id,
                                            product.count + 1
                                        )
                                    }
                                    className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    type="button"
                                >
                                    <span className="sr-only">Quantity button</span>
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            <span>{product.price} EGP</span>
                        </td>
                        <td className="px-6 py-4">
                            <button
                                onClick={() => deleteProduct(product.product._id)}
                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                            >
                                Remove
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
                <Link to={'/checkout'} className="bg-main rounded-md text-white p-2 m-2 text-center">Check Out</Link>
            </table>
        </div>
    );
}
