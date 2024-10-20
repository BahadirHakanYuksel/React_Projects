import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: {
    numberOfItems: 0,
    totalCost: 0,
    payment: {
      cardNumber: undefined,
      expiryDate: undefined,
      cvv: undefined,
    },
  },
  products: [
    {
      name: "Trying",
      id: 0,
      cost: "0",
      description: "Trying description",
      basketQuantity: 0,
    },
    {
      name: "Product 1",
      id: 1,
      cost: "10",
      description: "Description of Product 1",
      basketQuantity: 0,
    },
    {
      name: "Product 2",
      id: 2,
      cost: "20",
      description: "Description of Product 2",
      basketQuantity: 0,
    },
    {
      name: "Product 3",
      id: 3,
      cost: "30",
      description: "Description of Product 3",
      basketQuantity: 0,
    },
    {
      name: "Product 4",
      id: 4,
      cost: "40",
      description: "Description of Product 4",
      basketQuantity: 0,
    },
    {
      name: "Product 5",
      id: 5,
      cost: "50",
      description: "Description of Product 5",
      basketQuantity: 0,
    },
    {
      name: "Product 6",
      id: 6,
      cost: "60",
      description: "Description of Product 6",
      basketQuantity: 0,
    },
    {
      name: "Product 7",
      id: 7,
      cost: "70",
      description: "Description of Product 7",
      basketQuantity: 0,
    },
    {
      name: "Product 8",
      id: 8,
      cost: "80",
      description: "Description of Product 8",
      basketQuantity: 0,
    },
    {
      name: "Product 9",
      id: 9,
      cost: "90",
      description: "Description of Product 9",
      basketQuantity: 0,
    },
    {
      name: "Product 10",
      id: 10,
      cost: "100",
      description: "Description of Product 10",
      basketQuantity: 0,
    },
  ],
  basketProducts: [],
  basketIsOpen: false,
};

const oss_app = createSlice({
  name: "oss_app",
  initialState,
  reducers: {
    addProductToBasket: (state, action) => {
      state.basket.numberOfItems += 1;
      state.basket.totalCost += action.payload.price;
      let idControl = true;
      let updatedData = state.products.filter(() => 1 === 1);
      let myProduct = JSON.parse(JSON.stringify(action.payload));

      updatedData.forEach((product) => {
        if (product.id === myProduct.id) {
          product.basketQuantity++;
        }
      });

      state.products = JSON.parse(JSON.stringify(updatedData));

      let bp_clone = JSON.parse(JSON.stringify(state.basketProducts));

      if (bp_clone.length === 0)
        state.basketProducts = [
          ...state.basketProducts,
          JSON.parse(JSON.stringify(updatedData))[myProduct.id],
        ];
      else if (bp_clone.length > 0) {
        bp_clone.forEach((product, i) => {
          if (product.id === myProduct.id) {
            product.basketQuantity++;
            idControl = false;
          }
        });

        if (idControl)
          state.basketProducts = [...state.basketProducts, myProduct];
        else state.basketProducts = bp_clone;
      }
    },
    minusProductFromBasket: (state, action) => {
      state.basket.numberOfItems -= 1;
      state.basket.totalCost -= action.payload.price;
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id && product.basketQuantity < 11) {
          return {
            ...product,
            basketQuantity: product.basketQuantity - 1,
          };
        }
        return product;
      });
      state.basketProducts.forEach((product, i) => {
        if (
          product.id === action.payload.id &&
          action.payload.basketQuantity < 11 &&
          action.payload.basketQuantity > 0
        ) {
          product = {
            ...action.payload,
            basketQuantity: action.payload.basketQuantity - 1,
          };
        } else {
          state.basketProducts = state.basketProducts.filter(
            (product) => product.id !== action.payload.id
          );
        }
      });
    },
    updateProduct: (state, action) => {
      // state.products = state.products.map((product) => {
      //     if (product.id === action.payload.id) {
      //     return {
      //         ...product,
      //         ...action.payload,
      //     };
      //     }
      //     return product;
      // });
    },
    openTheBasket: (state) => {
      state.basketIsOpen = true;
    },
    closeTheBasket: (state) => {
      state.basketIsOpen = false;
    },
  },
});

export default oss_app.reducer;
export const {
  addProductToBasket,
  minusProductFromBasket,
  updateProduct,
  openTheBasket,
  closeTheBasket,
} = oss_app.actions;
