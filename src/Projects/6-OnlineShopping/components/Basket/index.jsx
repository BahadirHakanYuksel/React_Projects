import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { closeTheBasketHandle } from "../../online-shopping-store/oss_utils";
import { useSelector } from "react-redux";

export default function Basket({ type = "mini" }) {
  const miniStyle = {
    width: "600px",
  };

  const fullStyle = {
    width: "100%",
  };

  const [activeStyle, setActiveStyle] = useState(miniStyle);

  const { basket, basketProducts } = useSelector((state) => state.oss_app);

  console.log(basketProducts);

  useEffect(() => {
    type === "mini" && setActiveStyle(miniStyle);
    type === "full" && setActiveStyle(fullStyle);
  }, [type]);

  // type = mini | full;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="basket"
      onClick={(e) => e.target.id === "basket" && closeTheBasketHandle()}
      className="fixed z-50 bg-black bg-opacity-50 left-0 w-full top-0 h-screen overflow-y-auto flex flex-col gap-4"
    >
      <div
        style={activeStyle}
        className="absolute right-0 h-full border-l-2 border-solid border-l-black bg-white p-5 flex flex-col gap-5 p-5"
      >
        <div className="flex items-center justify-between">
          <header className="text-3xl font-medium text-orange-600">
            Your Basket
          </header>
          <button
            onClick={closeTheBasketHandle}
            className="text-lg font-medium text-white bg-black w-8 h-8 rounded-md flex items-center justify-center active:scale-95 duration-200"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <div className="text-gray-600 font-medium">
          There are{" "}
          <strong className="text-black">{basket.numberOfItems}</strong>{" "}
          products in your basket.
        </div>

        <div className="flex flex-col gap-2.5">
          {basketProducts.map((product, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b-2 border-solid border-gray-200 p-2.5"
            >
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 rounded-lg border-2 border-solid border-gray-600"></div>
                <header>{product.name}</header>
              </div>
              <div className="flex items-center gap-1">
                <button className="border-2 border-solid border-red-500 w-8 h-8 flex items-center justify-center">
                  -
                </button>
                <span className="border-2 border-solid border-gray-500 w-8 h-8 flex items-center justify-center">
                  {product.basketQuantity}
                </span>
                <button className="border-2 border-solid border-blue-500 w-8 h-8 flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
