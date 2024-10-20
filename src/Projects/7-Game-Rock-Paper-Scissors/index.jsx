import classNames from "classnames";
import React, { useState } from "react";
import Game from "./pages/Game";
import { motion } from "framer-motion";

export default function RockPapperScissors() {
  const [activeStep, setActiveStep] = useState(1);
  const [numberOfRounds, setNumberOfRounds] = useState(3);
  const [activeItem, setActiveItem] = useState("rock");
  const [username, setUsername] = useState("You");

  return (
    <div className="relative min-h-screen bg-sky-900 bg-opacity-30">
      {activeStep === 1 && (
        <BeforeStart
          numberOfRounds={numberOfRounds}
          setNumberOfRounds={setNumberOfRounds}
          setActiveStep={setActiveStep}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          username={username}
          setUsername={setUsername}
        />
      )}
      {activeStep === 2 && (
        <Game
          numberOfRounds={numberOfRounds}
          setActiveStep={setActiveStep}
          username={username}
        />
      )}
    </div>
  );
}

const BeforeStart = ({
  numberOfRounds,
  setNumberOfRounds,
  setActiveStep,
  username,
  setUsername,
}) => {
  const rounds = [3, 5, 10, 20, 30];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center h-screen w-full"
    >
      <header className="text-8xl font-bold  mb-10 flex items-center justify-center gap-10 w-[980px]">
        <div className="relative flex text-orange-500">
          Rock
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 text-orange-600">
            <i className="fa-regular fa-hand-back-fist"></i>
          </div>
        </div>
        <div className="relative flex text-blue-500">
          Papper
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 text-blue-600">
            <i className="fa-regular fa-hand"></i>
          </div>
        </div>
        <div className="relative flex text-green-500">
          Scissors
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 text-green-600">
            <i className="fa-regular fa-hand-scissors"></i>
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-8 w-[980px]">
        <div className="flex flex-col gap-1.5">
          <header className="text-gray-300 font-medium text-4xl">
            Username
          </header>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-transparent border-2 border-solid border-gray-400 focus:border-blue-500 duration-200 rounded-lg w-full h-20 px-5 text-3xl font-medium text-white"
          />
        </div>
        <div className="flex justify-between items-center gap-3.5">
          <header className="text-gray-200 text-4xl">
            Select Number of Rounds
          </header>
          <div className="flex items-center gap-5">
            {rounds.map((round, i) => (
              <button
                key={round}
                onClick={() => setNumberOfRounds(round)}
                className={classNames(
                  "h-20 w-20 rounded-md border-4 border-solid border-gray-400 flex items-center justify-center text-4xl font-medium text-gray-400 hover:border-gray-300 hover:text-gray-300 duration-200 scale-90 hover:scale-100",
                  {
                    "!text-blue-300 !border-blue-500 !scale-110 !rotate-0":
                      numberOfRounds === round,
                  },
                  {
                    "hover:-rotate-[15deg]": i % 2 === 1,
                  },
                  {
                    "hover:rotate-[15deg]": i % 2 === 0,
                  }
                )}
              >
                {round}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => setActiveStep(2)}
          className="mt-5 w-full h-24 text-4xl font-medium border-b-4 border-r-0 border-t-0 border-l-0 border-solid border-b-white bg-blue-500 hover:bg-indigo-500 duration-300 text-white rounded-full"
        >
          Start
        </button>
      </div>
    </motion.div>
  );
};
