import React from "react";
import Header from "./components/Header";


const App = () => {
  return (
    <div>
      <Header />
      
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CandyShop = () => {
//     const [candies, setCandies] = useState([]);
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         fetchCandies();
//     }, []);

//     const fetchCandies = async () => {
//         try {
//             const response = await fetch('http://localhost:3000/candies');
//             const candiesData = await response.json();
//             setCandies(candiesData);
//         } catch (error) {
//             console.error('Error fetching candies:', error);
//         }
//     };

//     const addToCart = async (candyId) => {
//         try {
//             const response = await fetch(`http://localhost:3000/addToCart/${candyId}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             const cartData = await response.json();
//             setCart(cartData);
//         } catch (error) {
//             console.error('Error adding to cart:', error);
//         }
//     };

//     return (
//         <div className="candy-shop">
//             <h1>Candy Shop</h1>
//             <div className="candy-list">
//                 {candies.map(candy => (
//                     <div key={candy._id} className="candy-item">
//                         <h2>{candy.name}</h2>
//                         <p>{candy.description}</p>
//                         <p>Price: ${candy.price}</p>
//                         <button onClick={() => addToCart(candy._id)}>Add to Cart</button>
//                     </div>
//                 ))}
//             </div>
//             <div className="cart">
//                 <h2>Cart</h2>
//                 {cart.map(item => (
//                     <div key={item._id} className="cart-item">
//                         <p>Candy: {item.name}</p>
//                         <p>Quantity: {item.quantity}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CandyShop;
