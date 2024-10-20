import classNames from "classnames";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function Game({ numberOfRounds, setActiveStep, username }) {
  const [game, setGame] = useState({
    round: 0,
    maxRound: numberOfRounds,
    userScore: 0,
    computerScore: 0,
    userItem: false,
    computerItem: false,
    itemButtonDisabled: false,
    roundLoadingTime: 3000,
    winner: null,
  });

  const items = [
    {
      id: 0,
      name: "rock",
      icon: <i className="fa-regular fa-hand-back-fist rotate-90"></i>,
      userIconClass: "fa-regular fa-hand-back-fist rotate-90 duration-200",
      computerIconClass: "fa-regular fa-hand-back-fist -rotate-90 duration-200",
    },
    {
      id: 1,
      name: "paper",
      icon: <i className="fa-regular fa-hand rotate-90"></i>,
      userIconClass: "fa-regular fa-hand rotate-90 duration-200",
      computerIconClass: "fa-regular fa-hand -rotate-90 duration-200",
    },
    {
      id: 2,
      name: "scissors",
      icon: <i className="fa-regular fa-hand-scissors rotate-180"></i>,
      userIconClass: "fa-regular fa-hand-scissors rotate-180 duration-200",
      computerIconClass: "fa-regular fa-hand-scissors rotate-0 duration-200",
    },
  ];

  const players = [
    {
      id: 1,
      name: username !== "" ? username : "You",
      label: "user",
      score: game.userScore,
    },
    { id: 2, name: "Computer", label: "computer", score: game.computerScore },
  ];

  const userIconRef = useRef();
  const computerIconRef = useRef();
  const userScoreRef = useRef();
  const computerScoreRef = useRef();

  const generateRandomItemId = () => Math.floor(Math.random() * items.length);

  const isUserWinner = (userItemId, computerItemId) => {
    return (
      (userItemId === 0 && computerItemId === 2) ||
      (userItemId === 1 && computerItemId === 0) ||
      (userItemId === 2 && computerItemId === 1)
    );
  };

  const isComputerWinner = (userItemId, computerItemId) => {
    return (
      (userItemId === 0 && computerItemId === 1) ||
      (userItemId === 1 && computerItemId === 2) ||
      (userItemId === 2 && computerItemId === 0)
    );
  };

  const iconAnimation = () => {
    const rotateSequence = [
      ["-45deg", "45deg"],
      ["45deg", "-45deg"],
      ["-45deg", "45deg"],
      ["45deg", "-45deg"],
      ["0deg", "0deg"],
    ];

    rotateSequence.forEach(([userRotation, computerRotation], index) => {
      setTimeout(() => {
        userIconRef.current.style.rotate = userRotation;
        computerIconRef.current.style.rotate = computerRotation;
      }, index * 500 + 10);
    });
  };

  const startTheRound = async (userItemId) => {
    if (game.round >= game.maxRound) {
      alert("Game Over");
      return;
    }

    userScoreRef.current.style.backgroundColor = "#4b5563";
    computerScoreRef.current.style.backgroundColor = "#4b5563";

    await setTimeout(() => {
      setGame((game) => ({
        ...game,
        itemButtonDisabled: true,
        round: game.round + 1,
        userItem: null,
        computerItem: null,
      }));
    }, 1);

    const computerItemId = await generateRandomItemId();

    await iconAnimation();

    setTimeout(async () => {
      if (isUserWinner(userItemId, computerItemId)) {
        await setGame((game) => ({
          ...game,
          userScore: game.userScore + 1,
          userItem: items[userItemId].userIconClass,
          computerItem: items[computerItemId].computerIconClass,
        }));
        userScoreRef.current.style.backgroundColor = "#16a34a";
        console.log("User won");
      } else if (isComputerWinner(userItemId, computerItemId)) {
        await setGame((game) => ({
          ...game,
          computerScore: game.computerScore + 1,
          userItem: items[userItemId].userIconClass,
          computerItem: items[computerItemId].computerIconClass,
        }));
        computerScoreRef.current.style.backgroundColor = "#16a34a";
      }
      await setGame((game) => ({ ...game, itemButtonDisabled: false }));
    }, game.roundLoadingTime);
  };

  useEffect(() => {
    setTimeout(() => {
      if (game.round !== game.maxRound) {
        if (game.userScore > game.maxRound / 2) {
          alert(`${players[0].name} won the game`);
          setGame((game) => ({ ...game, winner: "user" }));
        } else if (game.computerScore > game.maxRound / 2) {
          alert(`${players[1].name} won the game`);
          setGame((game) => ({ ...game, winner: "computer" }));
        }
      } else {
        if (game.round === game.maxRound) {
          if (game.userScore > game.computerScore) {
            alert(`${players[0].name} won the game`);
            setGame((game) => ({ ...game, winner: "user" }));
          } else if (game.userScore < game.computerScore) {
            alert(`${players[1].name} won the game`);
            setGame((game) => ({ ...game, winner: "computer" }));
          } else {
            alert("The Game is draw");
            setGame((game) => ({ ...game, winner: "draw" }));
          }
        }
      }
    }, 100);
  }, [game.userScore, game.computerScore]);

  const letTheGameBegin = () => {
    setGame((game) => ({
      ...game,
      round: 0,
      userScore: 0,
      computerScore: 0,
      userItem: false,
      computerItem: false,
      itemButtonDisabled: false,
      winner: null,
    }));
    setActiveStep(1);
  };

  const playAgain = () => {
    userScoreRef.current.style.backgroundColor = "#4b5563";
    computerScoreRef.current.style.backgroundColor = "#4b5563";
    setGame((game) => ({
      ...game,
      round: 0,
      userScore: 0,
      computerScore: 0,
      userItem: false,
      computerItem: false,
      itemButtonDisabled: false,
      winner: null,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-full text-white flex items-center justify-center relative"
    >
      <button
        onClick={letTheGameBegin}
        title="Go Back <--"
        className="absolute left-10 top-10 w-40 text-2xl h-20 bg-orange-600 border-b-4 border-solid border-b-black hover:border-b-white rounded-lg hover:scale-110 duration-300"
      >
        <i className="fa-solid fa-arrow-left-long"></i>
      </button>
      <div className="w-[980px] h-4/5 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-2.5">
            <div
              ref={userScoreRef}
              className="flex items-center justify-center border-2 border-solid border-white rounded-full w-14 h-14 text-xl bg-gray-600 duration-200"
            >
              {game.userScore}
            </div>
            <header className="bg-indigo-500 text-xl font-medium min-w-32 px-2.5 h-14 flex items-center justify-center rounded-lg">
              {players[0].name}
            </header>
            <div className="flex items-center justify-center w-52 h-52 rounded-lg bg-gray-800 border-2 border-solid border-gray-500 text-8xl mt-5">
              <i
                ref={userIconRef}
                className={
                  game.userItem
                    ? game.userItem
                    : "fa-regular fa-hand-back-fist rotate-90 duration-200"
                }
              ></i>
            </div>
          </div>

          <div className="flex flex-col">
            <header className="w-full h-12 bg-gray-900 flex items-center justify-center border-2 border-solid border-gray-400 border-b-0">
              {numberOfRounds} Round
            </header>
            <div className="w-24 h-24 bg-gray-600 border-2 border-solid border-gray-400 border-t-0 text-4xl font-medium flex items-center justify-center">
              {game.round === 0 ? "-" : game.round}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2.5">
            <div
              ref={computerScoreRef}
              className="flex items-center justify-center border-2 border-solid border-white rounded-full w-14 h-14 text-xl bg-gray-600 duration-200"
            >
              {players[1].score}
            </div>
            <header className="bg-indigo-500 text-xl font-medium w-32 h-14 flex items-center justify-center rounded-lg">
              {players[1].name}
            </header>
            <div className="flex items-center justify-center w-52 h-52 rounded-lg bg-gray-800 border-2 border-solid border-gray-500 text-8xl mt-5">
              <i
                ref={computerIconRef}
                className={
                  game.computerItem
                    ? game.computerItem
                    : "fa-regular fa-hand-back-fist -rotate-90 duration-200"
                }
              ></i>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center relative">
          <button
            onClick={playAgain}
            className={classNames(
              "absolute left-0 bottom-0 w-36 h-36 rounded-full bg-blue-500 duration-300 text-xl font-medium hover:!scale-110 border-4 border-solid border-white opacity-0 invisible scale-0",
              {
                "!opacity-100 !visible !scale-100": game.winner !== null,
              }
            )}
          >
            Play Again
          </button>
          <div className="flex flex-col">
            <header className="text-4xl font-medium text-center mt-5">
              Choose your item
            </header>
            <div className="flex items-center justify-center gap-5 mt-5">
              {items.map((item) => (
                <button
                  disabled={game.itemButtonDisabled}
                  key={item.id}
                  onClick={() => startTheRound(item.id)}
                  className="w-32 h-32 bg-gray-700 border-2 border-solid border-gray-500 rounded-lg flex items-center justify-center text-6xl hover:bg-gray-600 duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => letTheGameBegin()}
            className={classNames(
              "absolute right-0 bottom-0 w-36 h-36 rounded-full bg-gray-950 duration-300 text-xl font-medium hover:!scale-110 border-4 border-solid border-white opacity-0 invisible scale-0",
              {
                "!opacity-100 !visible !scale-100": game.winner !== null,
              }
            )}
          >
            New Game
          </button>
        </div>
      </div>
    </motion.div>
  );
}
