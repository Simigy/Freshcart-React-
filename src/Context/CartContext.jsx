import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {createContext} from "react";
import toast from "react-hot-toast";
import Cart from "../components/Cart/Cart";
import checkout from "../components/Checkout/Checkout";


export let CartContext = createContext({
    cart: null,
    addProductToCart: () => {},
    addProductToWishlist: () => {},
    clearCart: () => {},
    deleteProduct: () => {},
    loading : false,
    updateProductCount : () => {},
    getLoggedUserCart : () => {},
    setCart : () => {},
    checkout : () => {},
});

export default function CartContextProvider(props) {
    let headers = {
        token: localStorage.getItem("userToken"),
    };

    const [cart, setCart] = useState([]);

    const [wishList, setWishList] = useState(null)

    const [loading, setLoading] = useState(false);

    async function checkout(shippingAddress) {
        try {
            setLoading(true);
            let {data} = await axios.post(
                `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:9002`,
                {
                    shippingAddress
                },
                {
                    headers,
                }
            );

            console.log(data);
            window.location.href = data.session.url
            setLoading(false);
            // return data

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    async function addProductToCart(productId) {
        try {
            setLoading(true);
            let {data} = await axios.post(
                `https://ecommerce.routemisr.com/api/v1/cart`,
                {
                    productId,
                },
                {
                    headers,
                }
            );
            toast.success(data.message);

            await getLoggedUserCart();
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    async function addProductToWishlist(productId) {
        try {
            setLoading(true);
            let {data} = await axios.post(
                `https://ecommerce.routemisr.com/api/v1/wishlist`,
                {
                    productId,
                },
                {
                    headers,
                }
            );
            console.log(data);
            toast.success(data.message);

            setWishList(data);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    async function updateProductCount(productId, count) {
        if (count > 0) {
            try {
                setLoading(true);
                let {data} = await axios.put(
                    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                    {
                        count,
                    },
                    {
                        headers,
                    }
                );
                console.log(data);

                setCart(data);
                return data;
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        // else {
        //   deleteProduct(productId);
        // }
    }

    async function deleteProduct(productId) {
        try {
            setLoading(true);
            let {data} = await axios.delete(
                `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                {headers}
            );
            console.log(data);

            setCart(data);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    async function clearCart() {
        try {
            setLoading(true);
            let {data} = await axios.delete(
                `https://ecommerce.routemisr.com/api/v1/cart/`,
                {headers}
            );
            console.log(data);

            setCart(null);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    // function getLoggedUserCart() {
    //   return (
    //     axios
    //       .get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
    //       .then((response) => response)
    //       // .then((data)=>{setCart(data)})
    //       .catch((error) => error)
    //   );
    // }

    async function getLoggedUserCart() {
        try {
            setLoading(true);
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {headers});

            console.log(data);

            setCart(data);
            return data;
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }


    useEffect(() => {
        getLoggedUserCart();
    }, []);

    return (
        <CartContext.Provider
            value={{
                addProductToWishlist,
                clearCart,
                deleteProduct,
                loading,
                updateProductCount,
                addProductToCart,
                getLoggedUserCart,
                cart,
                setCart,
                checkout,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}
