import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";
import PostCard from "../../components/PostCard";

export default function Profile() {
  const { user } = useSelector((state) => state.app);

  const profileContentMenu = ["Posts", "Likes", "Saves"];
  const [
    activeProfileContentCategoryIndex,
    setActiveProfileContentCategoryIndex,
  ] = useState(0);

  return (
    <div className="profile-grid grid">
      <div className="pr-5">
        <div className="flex flex-col gap-2.5">
          <header>Profile Menu</header>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="h-[200px] bg-gray-700 rounded-lg relative">
          <div className="bg-gray-800 rounded-full absolute left-1/2 -translate-x-1/2 h-32 w-32 -bottom-16"></div>
        </div>
        <div className="pt-[72px] relative">
          <div className="flex flex-col items-center">
            <header className="text-xl font-medium ">
              Bahadır Hakan Yüksel
            </header>
            <header className="text-gray-400">@byhakan66</header>
          </div>
          {user && (
            <button className="absolute bg-gray-600 left-0 top-2.5 px-2.5 h-10 rounded-lg">
              Edit Profile
            </button>
          )}
        </div>
        {/* desc */}
        <div className="text-sm flex flex-col gap-1.5 mt-5">
          <p>description</p>
          <div>Links</div>
          <div className="flex items-center justify-center gap-5">
            <button className="gap-1.5 border-2 border-solid border-gray-500 h-10 flex items-center justify-start rounded-full overflow-hidden">
              <div className="bg-gray-700 w-[58px] h-full flex items-center justify-center px-2.5">
                1 K
              </div>
              <header className="pr-2.5">Followings</header>
            </button>
            <button className="gap-1.5 border-2 border-solid border-gray-500 h-10 flex items-center justify-start rounded-full overflow-hidden">
              <header className="pl-2.5">Followers</header>
              <div className="bg-gray-700 w-[58px] h-full flex items-center justify-center px-2.5">
                24.5 K
              </div>
            </button>
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col mt-5 gap-2.5">
          <div className="grid grid-cols-3">
            {profileContentMenu.map((category, i) => (
              <button
                onClick={() => setActiveProfileContentCategoryIndex(i)}
                key={i}
                className={classNames(
                  "border-b-2 border-solid border-gray-700 h-14 flex items-center justify-center font-medium opacity-65 pointer-events-auto duration-200 hover:bg-gray-200 hover:bg-opacity-20",
                  {
                    "!opacity-100 !pointer-events-none !border-b-blue-400":
                      i === activeProfileContentCategoryIndex,
                  }
                )}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-10">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
      <div className="pl-5">
        <div className="flex flex-col gap-2.5">
          <header>Gündem</header>
        </div>
      </div>
    </div>
  );
}
