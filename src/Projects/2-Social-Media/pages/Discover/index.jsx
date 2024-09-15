import { button } from "framer-motion/m";
import PostCard from "../../components/PostCard";
import { useState } from "react";
import classNames from "classnames";

export default function Discover() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const discovers = ["university", "bitcoin", "Türkiye", "economy", "sports"];
  const [activeDiscoverIndex, setActiveDiscoverIndex] = useState(null);
  return (
    <div className="social-media-main-grid">
      <div className="pr-5">
        <div className="p-3 rounded-lg bg-opacity-30"></div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center flex-wrap gap-2.5">
          {discovers.map((topic, i) => (
            <button
              onClick={() => setActiveDiscoverIndex(i)}
              className={classNames(
                "bg-gray-600 rounded-lg px-1.5 py-1 hover:bg-gray-700 duration-200",
                {
                  "!bg-blue-800": i === activeDiscoverIndex,
                }
              )}
              key={i}
            >
              #{topic}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          {array.map((_, i) => (
            <PostCard key={i} />
          ))}
        </div>
      </div>
      <div className="pl-5">
        <div className="p-3 rounded-lg bg-opacity-30"></div>
      </div>
    </div>
  );
}
