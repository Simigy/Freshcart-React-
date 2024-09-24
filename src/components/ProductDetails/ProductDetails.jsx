import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./ProductDetails.module.css";
import { Link , useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { CartContext } from "../../Context/CartContext.jsx";



export default function ProductDetails() {
  const [productdetails, setProductDetails] = useState(null);
  const [relatedproducts, setRelatedProducts] = useState([]);
  const [wishList, setWishList] = useState(null);


  let {addProductToCart , addProductToWishlist } = useContext(CartContext);

  // useEffect(() => {
  //   getCart;
  // }, []);


  let { id , category } = useParams();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function getProductDetails(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        setProductDetails(data.data);
        console.log(data.data);
      })
      .catch((err) => {});
  }

  function getRelatedProducts(category) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        let allProducts = data.data;
        console.log(allProducts);
       let related = allProducts.filter((product)=> product.category.name == category)
       console.log(related);
       
       setRelatedProducts(related);
        
        // console.log(data.data);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    getProductDetails(id);
    getRelatedProducts(category);
  }, [id , category]);
  // console.log(id);

  return (
    <>
      <div className="row">
        <div className="w-1/4">
        <Slider {...settings}>
      {productdetails?.images.map((src)=> <img
            className="w-full"
            src={src}
            key={src}
            alt={productdetails?.title}
          />)}
    </Slider>
       
        </div>
        <div className="w-3/4 p-6">
          <h1 className="text-lg font-semibold text-gray-950">
            {productdetails?.title}
          </h1>
          <p className="text-gray-700 mt-4">{productdetails?.description}</p>

          <div className="flex justify-between my-4">
            <span>{productdetails?.price} EGP </span>
            <span>
              {" "}
              <i className="fas fa-star text-yellow-500"></i>{" "}
              {productdetails?.ratingsAverage}
            </span>
          </div>
          <span onClick={()=> addProductToWishlist(id)}><i className="fa-solid fa-heart cursor-pointer text-red-200 hover:text-red-700 btn mb-3"></i></span>

          <div onClick={()=>addProductToCart(id)} className="btn cursor-pointer">Add to cart</div>
        </div>
      </div>

      

      <div className="row">

    

      {relatedproducts.map((product)=> 

        <div key={product.id} className="w-1/6">
          <div className="product py-4">
              <Link to={`/productdetails/${product.id}/${product.category.name}`}>
              <img className="w-full" src={product.imageCover} alt={product.title} />
              <span className="block font-light text-green-600">{product.category.name}</span>
              <h3 className="text-lg font-normal text-gray-800">{product.title.split(' ').slice(0,2).join(' ')}</h3>

              <div className="flex justify-between">
                <span>{product.price} EGP </span>
                <span> <i className="fas fa-star text-yellow-500"></i> {product.ratingsAverage}</span>
              </div>
              <div className="btn">Add to cart</div>
              </Link>
            </div>
        </div>
      )}
      </div>
    </>
  );
}
