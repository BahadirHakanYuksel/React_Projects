import { useEffect, useRef, useState } from "react";
import PostCard from "./components/PostCard";
let first_len_update = 80;

export default function SocialMedia() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const maxCharacterLengthMedium = 170;
  const maxCharacterLengthLarge = 570;

  const [userPost, setUserPost] = useState({
    text: "",
    img_url: "",
    emoji: "",
    tags: [],
  });
  const userPostRef = useRef();

  const handlePostChange = (e) => {
    setUserPost({ ...userPost, text: e.target.value });
  };
  useEffect(() => {
    const textarea = userPostRef.current;
    let newlines = (userPost.text.match(/\n/g) || []).length;
    console.log(newlines);
    //burda kaldım
    if (newlines % 3 === 0 && newlines > 0 && first_len_update < 1200) {
      first_len_update += 80;
      textarea.style.height = `${first_len_update}px`;
      console.log("bursaııı - ", first_len_update);
    } else if (newlines <= 2) {
      textarea.style.height = "80px";
      console.log("jldshasdfhasdf");
    }
  }, [userPost.text]);
  return (
    <div className="social-media-main-grid">
      <div className="pr-5">
        <div className="p-3 rounded-lg bg-sky-900 bg-opacity-30">
          left sidebar
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-gray-700 bg-opacity-30 flex flex-col p-4 rounded-lg gap-3.5 max-h-[720px] overflow-hidden">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1.5">
              <div className="bg-gray-500 rounded-full w-11 h-11"></div>
              <header className="font-medium">Profile Name</header>
            </button>
            <div className="text-gray-400">{userPost.text.length} / 2000</div>
          </div>
          <div className="relative">
            <textarea
              maxLength={2000}
              ref={userPostRef}
              value={userPost.text}
              onChange={handlePostChange}
              className="text-base resize-none w-full h-auto bg-transparent max-h-[570px]"
              placeholder="What's going on?"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <i className="fa-regular fa-images"></i>
              <i className="fa-solid fa-icons"></i>
              <i className="fa-solid fa-list-ul"></i>
            </div>
            <button className="text-gray-500 bg-black bg-opacity-40 rounded-full px-5 h-10 text-base font-medium border-2 border-solid border-gray-500 hover:border-blue-400 hover:text-blue-400   duration-300">
              Send
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10">
          {array.map((_, i) => (
            <PostCard key={i} id={i} />
          ))}
        </div>
      </div>

      <div className="pl-5 sticky top-0 right-0">
        <div className="p-3 rounded-lg bg-sky-900 bg-opacity-30">
          right sidebar
        </div>
      </div>
    </div>
  );
}
