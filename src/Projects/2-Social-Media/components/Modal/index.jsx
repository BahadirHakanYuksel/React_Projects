import { useSelector } from "react-redux";
import { closeModalHandle } from "../../socialMediaUtils";
import { motion } from "framer-motion";

export default function Modal() {
  const { modal_id } = useSelector((state) => state.app);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target.id === "modal-main" && closeModalHandle()}
      id="modal-main"
      className="fixed left-0 top-0 z-20 flex items-center justify-center h-screen w-full bg-gray-800 bg-opacity-50"
    >
      {modal_id === 0 && (
        <div className="w-[500px] h-[300px] bg-black p-5 rounded-lg">Hii</div>
      )}
    </motion.div>
  );
}
