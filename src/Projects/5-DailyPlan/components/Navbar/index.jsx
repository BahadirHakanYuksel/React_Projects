import React from "react";

export default function Navbar() {
  return (
    <div className="px-20 py-2.5 h-16 bg-[#4444] flex items-center justify-between text-xl">
      <header className="bg-blue-500 bg-opacity-30 px-2.5 h-full flex items-center justify-center rounded-md">
        Daily Plan
      </header>
      <div className="flex items-center gap-2.5">
        <a
          href={
            "https://github.com/BahadirHakanYuksel/React_Projects/tree/main/src/Projects"
          }
          className="px-4 py-2 bg-[#222] hover:bg-[#5555] duration-200 rounded-md"
        >
          Go Source Code
        </a>
      </div>
    </div>
  );
}
