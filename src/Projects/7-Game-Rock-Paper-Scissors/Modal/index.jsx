import classNames from "classnames";
import React from "react";

export default function ModalRPS() {
  return (
    <div className="w-full h-screen fixed left-0 top-0 bg-black bg-opacity-50">
      <div className="min-w-[320px] w-[420px] min-h-[140px] h-[200px] bg-white border-2 border-solid border-blue-500 rounded-lg p-5">
        <header className="text-lg font-medium">Result</header>
        <ScoreBox score={0} who="user" />
        <ScoreBox who="default" />
        <ScoreBox score={0} who="computer" />
      </div>
    </div>
  );
}

const ScoreBox = ({ score = 0, who = "default" }) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-center",
        {
          "border-gray-500": who === "default",
        },
        {
          "border-indigo-500": who === "user",
        },
        {
          "border-blue-800": who === "computer",
        }
      )}
    >
      {who === "default" ? "V.S." : score}
    </div>
  );
};
