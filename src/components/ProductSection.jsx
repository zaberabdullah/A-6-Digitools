import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";

const ProductSection = ({ handleAddToCart, handleDelete, handleClearCart, cartItems, isCartView, setIsCartView }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCheckout = () => {
    handleClearCart();
    setIsCartView(false);
  };

  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: "👤",
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: "📦",
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: "🚀",
    },
  ];

  return (
    <section className="container mx-auto px-4 lg:px-16 py-12">
      <div className="text-center p-5">
        <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
        <p className="text-[#627382] pt-4">
          Choose from our curated collection of premium digital products designed to <br /> boost your productivity and
          creativity.
        </p>
      </div>
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setIsCartView(false)}
          className={`px-10 py-2.5 rounded-full font-bold transition-all ${!isCartView ? "bg-[#7C3AED] text-white shadow-lg" : "bg-gray-100 text-gray-700"}`}
        >
          Products
        </button>
        <button
          onClick={() => setIsCartView(true)}
          className={`px-10 py-2.5 rounded-full font-bold transition-all ${isCartView ? "bg-[#7C3AED] text-white shadow-lg" : "text-gray-700"}`}
        >
          Cart ({cartItems.length})
        </button>
      </div>

      {!isCartView ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-100 p-8 rounded-4xl bg-white hover:shadow-2xl flex flex-col relative"
            >
              {product.badge && (
                <span className="absolute top-6 right-6 bg-[#FEF3C7] text-[#D97706] text-[10px] uppercase font-black px-3 py-1 rounded-full border border-amber-200">
                  {product.badge}
                </span>
              )}

              <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-2xl shadow-inner">
                {product.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-[#111827]">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-6 grow leading-relaxed">{product.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-extrabold text-[#111827]">${product.price}</span>
                <span className="text-gray-400 font-medium ml-1">{product.billing}</span>
              </div>

              <ul className="space-y-3 mb-8 border-t border-gray-50 pt-6">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                    <span className="text-green-400 font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-[#7C3AED] text-white py-4 rounded-2xl font-bold hover:bg-[#5117af] shadow-md"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-[#111827]">Your Cart</h2>
            {cartItems.length > 0 && (
              <button onClick={handleClearCart} className="text-red-500 font-bold hover:underline transition-all">
                Clear All
              </button>
            )}
          </div>

          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border border-gray-100 p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-4xl bg-gray-50 p-4 rounded-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-xl ">{item.name}</h3>
                      <p className="text-[#7C3AED] font-black text-lg">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-3xl text-black hover:text-red-500 transition-colors cursor-pointer p-2"
                  >
                    <TiDelete />
                  </button>
                </div>
              ))}

              <div className="mt-10 border-t border-gray-200 pt-8">
                <div className="flex justify-between items-center mb-8 px-4">
                  <span className="text-[16px] font-medium">Total:</span>
                  <span className="text-4xl font-extrabold text-[#111827]">
                    ${cartItems.reduce((acc, item) => acc + item.price, 0)}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-purple-600 text-white py-2 rounded-3xl font-medium text-[16px] hover:bg-[#6017d6] transition-all shadow-xl"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 rounded-[3rem] border-2 border-dashed border-gray-200">
              <p className="text-xl font-medium">Your cart is empty!</p>
            </div>
          )}
        </div>
      )}

      <div className="text-center pt-20">
        <h1 className="text-5xl font-extrabold">Get Started in 3 Steps</h1>
        <p className="text-[#627382] pt-4">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white border border-gray-100 p-10 rounded-[2.5rem] text-center hover:shadow-xl"
          >
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#7C3AED] text-white flex items-center justify-center rounded-full font-bold text-sm shadow-lg border-4 border-white">
              {step.id}
            </div>

            <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-purple-100">
              <span className="text-4xl">{step.icon}</span>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-[#111827]">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
