import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/banner";
import Navbar from "./components/Navbar/navbar";
import Stats from "./components/Stats/Stats";
import ProductSection from "./components/ProductSection";


function App() {
  const [cart, setCart] = useState([]);
  const [isCartView, setIsCartView] = useState(false);

  const handleAddToCart = (product) =>{
    setCart([...cart, product]);
  }
  return (
    <>
      <Navbar cartCount = {cart.length} setIsCartView={setIsCartView}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <ProductSection 
      handleAddToCart={handleAddToCart}
      cartItems={cart} 
        isCartView={isCartView} 
        setIsCartView={setIsCartView}
      >
      </ProductSection>
    </>
  );
}

export default App;
