// MODAL

import { socialMediaStore } from "./socialMediaStore";
import {
  closeModal,
  closePopup,
  openModal,
  openPopup,
} from "./socialMediaStore/app";

export const openModalHandle = (id) => {
  socialMediaStore.dispatch(openModal(id));
};

export const closeModalHandle = () => {
  socialMediaStore.dispatch(closeModal());
};

// popup

export const openPopupHandle = (popup_data) => {
  socialMediaStore.dispatch(openPopup(popup_data));
};

export const closePopupHandle = () => {
  socialMediaStore.dispatch(closePopup());
};
