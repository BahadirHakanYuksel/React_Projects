import { oss } from ".";
import {
  addProductToBasket,
  closeTheBasket,
  minusProductFromBasket,
  openTheBasket,
} from "./oss_app";

export const addProductToBasketHandle = (info) => {
  oss.dispatch(addProductToBasket(info));
};

export const minusProductFromBasketHandle = (info) => {
  oss.dispatch(minusProductFromBasket(info));
};

export const openTheBasketHandle = () => {
  oss.dispatch(openTheBasket());
};

export const closeTheBasketHandle = () => {
  oss.dispatch(closeTheBasket());
};
