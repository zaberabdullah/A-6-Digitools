import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/banner";
import Navbar from "./components/Navbar/navbar";
import Stats from "./components/Stats/Stats";
import ProductSection from "./components/ProductSection";
import Pricing from "./components/pricing";
import Workflow from "./components/Workflow";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartView, setIsCartView] = useState(false);

  const handleAddToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
    } else {
      alert("Already in cart!");
    }
  };

  const handleDelete = (id) => {
    const remaining = cart.filter((item) => item.id !== id);
    setCart(remaining);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} setIsCartView={setIsCartView}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <ProductSection
        handleAddToCart={handleAddToCart}
        handleDelete={handleDelete}
        handleClearCart={handleClearCart}
        cartItems={cart}
        isCartView={isCartView}
        setIsCartView={setIsCartView}
      ></ProductSection>
      <Pricing></Pricing>
      <Workflow></Workflow>
    </>
  );
}

export default App;
