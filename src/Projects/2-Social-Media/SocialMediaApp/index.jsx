import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import { AnimatePresence } from "framer-motion";
import Popup from "../components/Popup";

export default function SocialMediaApp() {
  const { modalBox, popup } = useSelector((state) => state.app);
  return (
    <div className="min-h-screen bg-black bg-opacity-80 text-white px-40 flex flex-col items-center">
      <AnimatePresence>{modalBox && <Modal />}</AnimatePresence>
      <AnimatePresence>{popup && <Popup />}</AnimatePresence>
      <Navbar />
      <Outlet />
    </div>
  );
}
