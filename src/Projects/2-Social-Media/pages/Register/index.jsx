import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FastRegister from "../../components/FastRegister";

export default function Register() {
  const options = ["Signup", "Login"];
  const genders = ["Male", "Female", "I don't want to specify"];

  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const [activeGenderIndex, setActiveGenderIndex] = useState(0);

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex gap-2.5">
        {options.map((option, i) => (
          <button
            onClick={() => setActiveOptionIndex(i)}
            key={i}
            className={classNames(
              "h-16 flex items-center justify-start text-3xl font-medium bg-gray-700 rounded-lg duration-500 pointer-events-auto w-[132px] px-5",
              {
                "!bg-blue-500 !bg-opacity-50 !pointer-events-none !w-[90%]":
                  i === activeOptionIndex,
              }
            )}
          >
            {option}
          </button>
        ))}
      </div>
      {activeOptionIndex === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-5"
        >
          <div className="flex flex-col p-5 w-[60%] bg-gray-700 bg-opacity-25 gap-7 rounded-lg">
            <FastRegister title={"Signup"} />
            <div className="h-1 w-full rounded-full bg-gray-500"></div>
            <div className="grid grid-cols-2 items-center gap-5">
              <div className="flex flex-col gap-0.5">
                <header className="font-medium text-lg">Name</header>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="bg-gray-600 bg-opacity-50 h-12 px-2.5 rounded-md"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <header className="font-medium text-lg">Surname</header>
                <input
                  type="text"
                  placeholder="Enter your surname..."
                  className="bg-gray-600 bg-opacity-50 h-12 px-2.5 rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-5">
              <div className="flex flex-col gap-0.5">
                <header className="font-medium text-lg">E-Mail</header>
                <input
                  type="email"
                  placeholder="example123@gmail.com"
                  className="bg-gray-600 bg-opacity-50 h-12 px-2.5 rounded-md"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <header className="font-medium text-lg">Username</header>
                <input
                  type="text"
                  placeholder="Enter a username..."
                  className="bg-gray-600 bg-opacity-50 h-12 px-2.5 rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-5">
              <div className="flex flex-col gap-0.5">
                <header className="font-medium text-lg">
                  Password{" "}
                  <span className="text-sm text-gray-400">
                    Min 6 | Max 36 char
                  </span>
                </header>
                <input
                  type="password"
                  placeholder="Enter the password..."
                  className="bg-gray-600 bg-opacity-50 h-12 px-2.5 rounded-md"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <header className="font-medium text-lg">Password Again</header>
                <input
                  type="password"
                  placeholder="Enter the password again..."
                  className="bg-gray-600 bg-opacity-50 h-12 px-2.5 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <header className="text-lg font-medium">
                Select Your Gender
              </header>
              <div className="grid grid-cols-3 gap-5">
                {genders.map((gender, i) => (
                  <button
                    onClick={() => setActiveGenderIndex(i)}
                    key={i}
                    className={classNames(
                      "h-12 border-2 border-solid border-gray-500 text-gray-300 rounded-md hover:border-gray-300 duration-200 pointer-events-auto opacity-80",
                      {
                        "!pointer-events-none !border-white !text-white !opacity-100":
                          i === activeGenderIndex,
                      }
                    )}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col gap-0.5">
                <header className="font-medium text-sm h-7 flex items-center text-gray-300">
                  E-Mail to Verification Code
                </header>
                <input
                  disabled
                  value={"deneme123@gmail.com"}
                  type="email"
                  placeholder="Enter your email..."
                  className="bg-gray-600 bg-opacity-50 h-12 px-2.5 rounded-md disabled:opacity-70 disabled:pointer-events-none"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <header className="font-medium text-sm h-7 flex gap-1.5 items-center text-gray-300">
                  Time : <div>120s</div>
                </header>
                <button
                  disabled
                  value={"deneme123@gmail.com"}
                  type="email"
                  placeholder="Enter your email..."
                  className="bg-black border-2 border-solid border-blue-300 text-blue-100 font-medium text-lg h-12 px-2.5 rounded-md hover:border-blue-500 hover:text-blue-300 cursor-pointer duration-200"
                >
                  Send Code
                </button>
              </div>
              <div className="flex flex-col gap-0.5">
                <header className="font-medium text-sm h-7 flex items-center text-gray-300">
                  Enter The Verificiation Code
                </header>
                <input
                  type="email"
                  placeholder="Enter code..."
                  className="bg-gray-600 bg-opacity-50 h-12 px-2.5 rounded-md border-2 border-solid border-gray-300 duration-200"
                />
              </div>
            </div>

            <button className="flex items-center h-14 bg-gradient-to-r to-blue-600 from-sky-500 rounded-full text-2xl justify-center font-medium hover:to-blue-500 hover:from-sky-600 duration-200 border-2 border-solid border-transparent hover:border-white mt-2.5">
              Sign up
            </button>
          </div>
          <div className="bg-gray-500 h-auto rounded-lg bg-opacity-20 flex flex-col items-center justify-center gap-2.5 w-[40%]">
            <div className="flex flex-col gap-1.5 justify-start">
              <header className="text-6xl font-medium mb-5">Welcome</header>
              <p className="text-lg font-medium flex items-center gap-1.5">
                {" "}
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>{" "}
                Share Post
              </p>
              <p className="text-lg font-medium flex items-center gap-1.5">
                {" "}
                <div className="w-2.5 h-2.5 bg-sky-600 rounded-full"></div> Like
              </p>
              <p className="text-lg font-medium flex items-center gap-1.5">
                {" "}
                <div className="w-2.5 h-2.5 bg-cyan-600 rounded-full"></div>{" "}
                Save
              </p>
            </div>
          </div>
        </motion.div>
      )}
      {activeOptionIndex === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-5"
        >
          <div className="bg-gray-500 h-auto rounded-lg bg-opacity-20 flex flex-col items-center justify-center gap-2.5 w-[40%]">
            <div className="flex flex-col gap-1.5 justify-start">
              <header className="text-5xl font-medium mb-5">
                Welcome Again
              </header>
              <p className="text-lg font-medium flex items-center gap-1.5">
                {" "}
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>{" "}
                Share Post
              </p>
              <p className="text-lg font-medium flex items-center gap-1.5">
                {" "}
                <div className="w-2.5 h-2.5 bg-sky-600 rounded-full"></div> Like
              </p>
              <p className="text-lg font-medium flex items-center gap-1.5">
                {" "}
                <div className="w-2.5 h-2.5 bg-cyan-600 rounded-full"></div>{" "}
                Save
              </p>
            </div>
          </div>
          <div className="flex flex-col p-5 w-[60%] bg-gray-700 bg-opacity-25 gap-7 rounded-lg">
            <div className="flex flex-col gap-0.5">
              <header className="font-medium text-lg">Username</header>
              <input
                type="text"
                placeholder="Enter your username..."
                className="bg-gray-600 bg-opacity-50 h-12 px-2.5 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <header className="font-medium text-lg">Password</header>
              <input
                type="password"
                placeholder="Enter your password..."
                className="bg-gray-600 bg-opacity-50 h-12 px-2.5 rounded-md"
              />
            </div>
            <div className="h-10 flex items-center justify-between">
              <button className="bg-white bg-opacity-10 px-2.5 h-8 text-white rounded-md overflow-hidden hover:bg-gray-800 flex gap-1.5 items-center">
                <div className="w-5 h-5 rounded-full border-2 border-solid border-white"></div>
                <div>Remember me</div>
              </button>
              <button className="bg-white bg-opacity-10 px-2.5 h-8 text-white rounded-md overflow-hidden hover:bg-gray-800 flex gap-1.5 items-center">
                <div>Forgot Password</div>
              </button>
            </div>
            <FastRegister title={"Login"} />
            <button className="flex items-center h-14 bg-gradient-to-r to-blue-600 from-sky-500 rounded-full text-2xl justify-center font-medium hover:to-blue-500 hover:from-sky-600 duration-200 border-2 border-solid border-transparent hover:border-white mt-2.5">
              Login
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
