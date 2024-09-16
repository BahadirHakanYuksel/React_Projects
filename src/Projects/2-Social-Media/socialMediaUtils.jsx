// MODAL

import { socialMediaStore } from "./socialMediaStore";
import { closeModal, openModal } from "./socialMediaStore/app";

export const openModalHandle = (id) => {
  socialMediaStore.dispatch(openModal(id));
};

export const closeModalHandle = () => {
  socialMediaStore.dispatch(closeModal());
};
