import { useEffect, useState } from "react";
import { addProductToBasketHandle } from "../../online-shopping-store/oss_utils";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    quantity < 10 && setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  useEffect(() => {
    quantity === "" && setQuantity(1);
  }, [quantity]);

  const addProduct = () => {
    quantity > 0 && quantity < 11 && addProductToBasketHandle(product);
    quantity < 11 && setQuantity(quantity + 1);
  };

  return (
    <div className="w-[300px] h-auto bg-white rounded-lg shadow-md flex flex-col gap-2.5 p-5 hover:shadow-xl duration-300">
      <header className="text-2xl font-medium">{product?.name}</header>
      <div className="text-gray-400 bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
        Product img
      </div>
      <span className="text-gray-500 text-sm">{product?.description}</span>
      <div className="flex items-center justify-end">
        <span className="border-2 border-solid border-blue-400 font-medium rounded-lg h-10 flex items-center px-2.5">
          {product?.cost}$
        </span>
      </div>
      {/* <div className="grid grid-cols-2 gap-2.5 items-center">
        <div className="flex gap-1.5">
          <button
            disabled={quantity === 1}
            onClick={decreaseQuantity}
            className="h-8 w-8 rounded-sm flex items-center justify-center border-2 border-solid border-gray-400 hover:border-red-500 hover:text-red-500 duration-200 disabled:opacity-50 disabled:pointer-events-none"
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <input
            className="h-8 w-12 rounded flex items-center justify-center overflow-hidden border-2 border-solid border-gray-500 text-center pointer-events-none"
            type="text"
            value={quantity}
            maxLength={1}
            max={10}
          />
          <button
            disabled={quantity === 10}
            onClick={increaseQuantity}
            className="h-8 w-8 rounded-sm flex items-center justify-center border-2 border-solid border-gray-400 hover:border-green-500 hover:text-green-500 duration-200 disabled:opacity-50 disabled:pointer-events-none"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button className="w-full h-10 active:scale-105 duration-200 bg-blue-800 text-white rounded-lg font-medium hover:bg-orange-500">
          Add to Basket
        </button>
      </div> */}
      <button
        onClick={addProduct}
        className="w-full h-10 active:scale-105 duration-200 bg-blue-800 text-white rounded-lg font-medium hover:bg-orange-500"
      >
        Add to Basket
      </button>
    </div>
  );
}
