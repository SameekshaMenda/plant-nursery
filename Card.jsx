// Card.js
import React, { useState } from 'react';
import './Card.css';
import './Navbar.css';
import './SearchBar.css'
import SearchBar from './SearchBar'; 

const card = [
  {
    id: 1,
    image: require("./assets/cactus.jpeg"),
    name: "Cactus Plant",
    info: "In the desert's embrace, the cactus, a resilient poet, etches tales of beauty on the canvas of arid sands, its thorns a dance of elegance and survival.",
    price: 599,
  },
  {
    id: 2,
    image: require("./assets/alevora.jpeg"),
    name: "Aloe Vera",
    info: "Aloe vera, a verdant symphony of resilience and serenity, dances gracefully with the sun's embrace, weaving tales of healing and vitality in every emerald leaf.",
    price: 299,
  },
  {
    id: 3,
    image: require("./assets/ficus.avif"),
    name: "Ficus Benjamina",
    info: "with its cascading foliage and ethereal grace, embodies nature's poetry within indoor spaces, enchanting admirers with its verdant allure and purifying presence.",
    price: 699,
  },
  {
    id: 4,
    image: require("./assets/pic.avif"),
    name: "Goosefoot",
    info: "a botanical ballet in verdant hues, pirouettes in the garden breeze, whispering tales of vitality and quiet splendor through every delicately shaped leaf.",
    price: 400,
  },
];

export default function Card() {
  const [quantities, setQuantities] = useState(card.map(() => 0)); // Array to store quantities for each item
  const [searchTerm, setSearchTerm] = useState('');

  const inc = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index]++;
    setQuantities(updatedQuantities);
  };

  const dec = (index) => {
    if (quantities[index] > 0) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index]--;
      setQuantities(updatedQuantities);
    }
  };

  const fun = () => {
    alert("Added to Wishlist!");
  };

  const filteredProducts = card.filter((product) =>
    product.info.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchBar onSearch={setSearchTerm} />
      <div className='card-container'>
        {filteredProducts.map((product, index) => (
          <div key={product.id} className='card'>
            <img src={product.image} alt="pro-image" />
            <p><strong>{product.name}</strong></p>
            <p>{product.info}</p>
            <h3>Price: ₹{product.price}</h3>
            <button className='btn-card' onClick={fun}>Add to cart</button>
            <br />
            <button className='btn' onClick={() => inc(index)}>+</button>
            <span>{quantities[index]}</span>
            <button className='btn' onClick={() => dec(index)}>-</button>
          </div>
        ))}
      </div>
    </>
  );
}