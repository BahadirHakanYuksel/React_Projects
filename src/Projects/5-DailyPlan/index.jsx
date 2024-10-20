import { useState } from "react";
import Navbar from "./components/Navbar";
import classNames from "classnames/bind";

export default function DailyPlan() {
  const categories = [
    "Work",
    "Health",
    "Social",
    "Hobby",
    "Family",
    "School",
    "Other",
  ];

  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const plans = ["Plan 1", "Plan 2", "Plan 3"];

  return (
    <div className="w-full bg-black text-white min-h-screen flex flex-col gap-5">
      <Navbar />
      <div className="flex gap-2.5 px-20">
        <div className="w-[320px] p-3 bg-[#222] text-white rounded-lg min-h-[500px]">
          <header className="text-lg border-b-2 border-solid border-[#555] ">
            Last Plans
          </header>
          <div className="flex flex-col gap-2.5 mt-2.5">
            {plans.map((plan, index) => (
              <button
                onClick={() => setActivePlanIndex(index)}
                key={index}
                className={classNames(
                  "w-full rounded-sm bg-[#555] text-white px-1.5 h-8 flex items-center hover:bg-[#259] duration-200 border-2 border-solid border-transparent",
                  {
                    "!bg-[#259] !border-[#fff]": index === activePlanIndex,
                  }
                )}
              >
                {plan}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
