import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import axios from "axios";

const Header = (props) => {
  const [cart, setCart] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [candies, setCandies] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        `https://crudcrud.com/api/074a23da890d4a8ba8361743d32785ff/candies`,
        { name, description, price }
      );

      // Optionally, you can clear the form after submission
      setName("");
      setDescription("");
      setPrice("");
      fetchCandies();
    } catch (error) {
      console.error("Error saving candy data:", error);
      alert("Failed to save candy data. Please try again.");
    }
  };

  const toggleCart = () => {
    setCart(!cart);
  };

  const fetchCandies = async () => {
    try {
      const response = await axios.get(
        `https://crudcrud.com/api/074a23da890d4a8ba8361743d32785ff/candies`
      );
      setCandies(response.data);
    } catch (error) {
      console.error("Error fetching candies:", error);
    }
  };

  useEffect(() => {
    fetchCandies();
  }, []); // Fetch candies when the component mounts

  return (
    <div>
      <h1>Candy Shop</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>

        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>

        <label>
          Price:
          <input type="number" value={price} onChange={handlePriceChange} />
        </label>

        <button type="submit">Submit</button>

        <button onClick={toggleCart}>Cart</button>
        {candies.length}
        {cart && <Cart />}
      </form>
      <h2>Candies</h2>
      <ul>
        {candies.map((candy) => (
          <li key={candy._id}>
            {candy.name}: {candy.description}: {candy.price}{" "}
            <button>Buy1</button>
            <button>Buy2</button>
            <button>Buy3</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
