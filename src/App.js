import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Contact from "./pages/Contact";

const App = () => {
 const [cart, setCart] = useState([]);
const [search, setSearch] = useState("");      // For search bar
const [category, setCategory] = useState("all"); // For category filter
const [categories, setCategories] = useState([]); // List of categories

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

  return (
    <Router>
      <Header 
  cartCount={cart.length}
  categories={categories}
  onSearch={(value) => setSearch(value)}
  onCategoryChange={(value) => setCategory(value)}
/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
  );
};

export default App;
