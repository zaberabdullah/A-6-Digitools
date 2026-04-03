import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/navbar";
import Stats from "./components/Stats/Stats";
import ProductSection from "./components/ProductSection";
import Pricing from "./components/pricing";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartView, setIsCartView] = useState(false);

  const handleAddToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success("Item added to cart!")
    } else {
      toast.error("Item already in cart!");
    }
  };

  const handleDelete = (id) => {
    const remaining = cart.filter((item) => item.id !== id);
    setCart(remaining);
     toast.warn("Item deleted!")
  };

  const handleClearCart = () => {
    setCart([]);
    toast.info("Payment Successful!");
  };

  return (
    <>
      <Navbar cartCount={cart.length} setIsCartView={setIsCartView}></Navbar>
      <ToastContainer></ToastContainer>
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
      <Footer></Footer>
    </>
  );
}

export default App;
