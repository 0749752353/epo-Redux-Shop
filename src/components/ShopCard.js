import { addToCart, removeFromCart  } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { useState, useEffect } from "react";
// ShopCard.jsx   
export const ShopCard = ({ product }) => {

const [isInCart, setIsInCart] = useState(false);

const dispatch = useDispatch();

const products = useSelector(state => state.cartState.cartList);

useEffect(() => {

const productInCart = products.find((item) => item.id === product.id);
if (productInCart) {
setIsInCart(true);
}else {
setIsInCart(false);
}

}, [products, product.id]);

    return (
      <div
        key={product.id}
        className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
       
          <img
            className="p-4 rounded-t-lg rounded"
            src={product.image}
           alt=""
          />


        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>  
          <p className="text-sm font-normal text-gray-700 dark:text-gray-400 mt-2">{product.description}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {product.price ? `Tsh${product.price}` : "Price not available"}
            </span>

            {isInCart ? (

          <button type="button" 
           className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={ () => dispatch(removeFromCart(product))} // Call the addToCart function when the button is clicked
           >Remove to cart</button>

            ) : (

                          <button type="button" 
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={ () => dispatch(addToCart(product))} // Call the addToCart function when the button is clicked
           >Add to cart</button>

            )}
            
          </div>
        </div>
      </div>
    );
  };
  