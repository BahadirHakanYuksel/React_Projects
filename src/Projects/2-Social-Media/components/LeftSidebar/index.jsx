import React, { useEffect, useState } from "react";

export default function LeftSideBar() {
  const [popularTopics, setPopularTopics] = useState([]);
  const topics = [
    { name: "Solana", views: "1.2M" },
    { name: "NFT", views: "1.5M" },
    { name: "Crypto", views: "2.2M" },
    { name: "React", views: "3.2M" },
    { name: "JavaScript", views: "4.2M" },
  ];

  useEffect(() => {
    const sorted = [...topics].sort((a, b) => {
      const convertViewsToNumber = (views) => {
        if (views.includes("M")) {
          return parseFloat(views) * 1e6;
        } else if (views.includes("K")) {
          return parseFloat(views) * 1e3;
        } else {
          return parseFloat(views);
        }
      };

      const viewsA = convertViewsToNumber(a.views);
      const viewsB = convertViewsToNumber(b.views);

      return viewsB - viewsA; // Büyükten küçüğe sıralama
    });

    setPopularTopics(sorted);
  }, []);

  return (
    <div className="pr-5 sticky top-0 left-0">
      <div className="p-3 rounded-lg bg-gray-400 bg-opacity-10">
        <header className="text-xl font-medium text-gray-500">Topics</header>
        <div className="flex flex-col items-start gap-2.5 mt-3">
          {popularTopics.map((topic, i) => (
            <button
              key={i}
              className="text-gray-300 bg-black w-full flex items-center justify-between h-11 rounded-lg px-2.5 hover:text-gray-100 border-2 border-solid border-transparent hover:border-gray-500 duration-200"
            >
              <span>#{topic.name}</span>
              <div className="text-xs text-gray-500 font-medium">
                {topic.views}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
