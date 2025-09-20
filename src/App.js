import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
 const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff6b35',
          borderRadius: 8,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
      }}
    >
      <Router>
        <div className="app-container">
          <Header 
            cartCount={cart.length}
            categories={categories}
            onSearch={(value) => setSearch(value)}
            onCategoryChange={(value) => setCategory(value)}
          />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={
                <Home 
                  search={search}
                  category={category}
                  setCategories={setCategories}
                />
              } />
              <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ConfigProvider>
  );
};

export default App;
