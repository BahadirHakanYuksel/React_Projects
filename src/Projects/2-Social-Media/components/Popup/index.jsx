import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { closePopupHandle } from "../../socialMediaUtils";

export default function Popup() {
  const { popup } = useSelector((state) => state.app);

  useEffect(() => {
    let timeOut = 3; //s
    const popupInterval = setInterval(() => {
      timeOut > 0 ? timeOut-- : closePopupHandle();
    }, 1000);
    return () => {
      clearInterval(popupInterval);
    };
  }, [popup]);

  return (
    <motion.div
      initial={{ right: "-200px,", opacity: 0 }}
      animate={{ right: "20px", opacity: 1 }}
      exit={{ right: "-200px", opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={classNames(
        "fixed top-5 right-5 px-3.5 py-2.5 rounded-lg border-2 border-solid border-gray-400 bg-gray-900 text-white items-start justify-start text-base min-w-[250px] duration-300 min-h-12 flex flex-col",
        {
          "!border-green-500": Number(popup.color_code) === 0,
        },
        {
          "!border-red-500": Number(popup.color_code) === 1,
        },
        {
          "!text-transparent": !popup,
        }
      )}
    >
      {popup
        ? popup.text.split("\n").map((text, i) => <p key={i}>{text}</p>)
        : ""}
    </motion.div>
  );
}
