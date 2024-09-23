import LeftSideBar from "./components/LeftSidebar";
import PostCard from "./components/PostCard";
import RightSideBar from "./components/RightSideBar";
import UserPostBox from "./components/UserPostBox";

export default function SocialMedia() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="social-media-main-grid">
      <LeftSideBar />
      <div className="flex flex-col gap-5 mb-20">
        <UserPostBox />
        <div className="grid grid-cols-1 gap-10">
          {array.map((_, i) => (
            <PostCard key={i} id={i} />
          ))}
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}
