import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function QrCodeGenerator() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [bgColor, setBgColor] = useState("ffffff");
  const [color, setColor] = useState("000000");

  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${400}x${400}&bgcolor=${bgColor}&color=${color}`
    );
  }, [word, bgColor, color]);

  function generate(e) {
    e.preventDefault();
    setWord(temp);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center h-screen"
    >
      <div className="flex flex-col gap-5 items-center justify-center w-[320px] h-screen">
        <h1 className="text-4xl text-gray-400">QR Code Generator</h1>
        <div className="flex flex-col w-full">
          <form onSubmit={generate} className="flex items-center h-12">
            <input
              className="bg-white bg-opacity-10 border-2 border-solid border-gray-600 border-r-0 focus:border-gray-400 focus:border-r-0 duration-200 text-white h-full px-5 rounded-l-full"
              type="text"
              value={temp}
              onChange={(e) => {
                setTemp(e.target.value);
              }}
              placeholder="Enter text to encode"
            />
            <button
              type="submit"
              className="h-full px-5 rounded-r-full bg-blue-700 border-2 border-solid border-blue-400 border-l-0 text-white"
            >
              Generate
            </button>
          </form>
          <div className="flex flex-col text-white gap-2.5 mt-5">
            <div className="grid grid-cols-2 items-center bg-gray-500 bg-opacity-20 rounded-sm px-2.5 h-10">
              <h5 className=" flex items-center">Background Color</h5>
              <input
                className="bg-transparent shadow-lg !p-0 w-full h-9"
                type="color"
                value={`#${bgColor}`}
                onChange={(e) => {
                  setBgColor(e.target.value.substring(1));
                }}
              />
            </div>
            <div className="grid grid-cols-2 items-center bg-gray-500 bg-opacity-20 rounded-sm px-2.5 h-10">
              <h5 className=" flex items-center">Color</h5>
              <input
                className="bg-transparent shadow-lg !p-0 w-full h-9"
                type="color"
                value={`#${color}`}
                onChange={(e) => {
                  setColor(e.target.value.substring(1));
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col w-full items-center">
          <AnimatePresence>
            {word ? (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="w-full flex flex-col gap-8"
                >
                  <header className="text-xl font-medium bg-gradient-to-tl to-gray-400 from-gray-700 bg-clip-text text-transparent text-gray-500 -mb-6">
                    Your QR Code
                  </header>
                  <div className="h-[320px] w-full flex items-center justify-center rounded-lg bg-white bg-opacity-10">
                    <img
                      className="w-[280px] aspect-square border-2 border-solid border-gray-500 rounded-lg overflow-hidden"
                      src={qrCode}
                      alt=""
                    />
                  </div>

                  <a
                    href={qrCode}
                    download="QRCode"
                    className="text-lg font-medium bg-gradient-to-br from-blue-900 to-sky-600 w-full py-2.5 rounded-full border-2 border-solid border-blue-400 text-white duration-200 hover:from-blue-600 hover:bg-gradient-to-br flex items-center justify-center"
                  >
                    Download
                  </a>
                </motion.div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="h-[300px] w-full flex items-center justify-center rounded-lg bg-white bg-opacity-10"
              >
                <h1 className="text-2xl text-gray-400">No QR Code</h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
