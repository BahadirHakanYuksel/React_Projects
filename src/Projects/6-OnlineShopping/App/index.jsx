import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Basket from "../components/Basket";
import { AnimatePresence } from "framer-motion";
import { openTheBasketHandle } from "../online-shopping-store/oss_utils";

export default function App() {
  const { basket, products, basketIsOpen } = useSelector(
    (state) => state.oss_app
  );
  return (
    <div className="text-black bg-gray-200 min-h-screen pb-20 relative">
      <AnimatePresence>
        {basketIsOpen && <Basket type="mini" />}
      </AnimatePresence>

      {/* navbar */}
      <nav className="w-full px-20 h-16 flex items-center justify-between sticky top-0 z-20 bg-gray-100">
        <header className="text-3xl font-medium text-orange-500">
          Online Shopping
        </header>
        <div className="flex items-center gap-2.5 ">
          <button
            onClick={openTheBasketHandle}
            className="flex items-center justify-center gap-2.5 font-medium bg-gray-300 bg-opacity-50 px-2.5 h-10 text-base rounded-lg border-2 border-solid border-transparent hover:border-orange-500 duration-200"
          >
            <span>{basket.numberOfItems}</span>
            <i className="fa-solid fa-basket-shopping text-orange-500"></i>
          </button>
        </div>
      </nav>
      <div className="flex flex-col gap-10 px-20 mt-10">
        <div className="w-full h-[400px] bg-blue-800 rounded-lg text-white flex items-center justify-center relative">
          <header className="text-5xl font-medium">
            Welcome to Online Shopping
          </header>
        </div>
        <div className="flex flex-col gap-5">
          <header className="text-gray-500 font-medium text-3xl text-center mb-2.5">
            Products
          </header>
          <div className="flex flex-wrap gap-10 justify-center">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
