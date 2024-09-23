import { useEffect, useRef, useState } from "react";

export default function UserPostBox() {
  const [userPost, setUserPost] = useState({
    text: "",
    img_url: "",
    emoji: "",
    tags: [],
  });
  const [lastLineLength, setLastLineLength] = useState(0);
  const [lastPostTextLength, setLastPostTextLength] = useState(0);
  const [lastScrollHeight, setLastScrollHeight] = useState(27);
  const [height, setHeight] = useState(27);

  const userPostRef = useRef();

  const handlePostChange = (e) => {
    setUserPost({ ...userPost, text: e.target.value });
  };

  useEffect(() => {
    const textarea = userPostRef.current;
    let newlines = (userPost.text.match(/\n/g) || []).length;
    setLastLineLength(newlines);
    setLastPostTextLength(userPost.text.length);
    setLastScrollHeight(textarea.scrollHeight);
    // console.log("textarea scrollHeight", textarea.scrollHeight);
    // console.log("textarea Last scrollHeight", lastScrollHeight);

    // console.log("New Length Of Post Text : ", userPost.text.length);
    // console.log("Last Length Of Post Text : ", lastPostTextLength);
    console.log("New Line Height : ", newlines);
    console.log("Last Line Height : ", lastLineLength);

    const scrollHeight = textarea.scrollHeight;
    setLastLineLength(newlines);
    setLastPostTextLength(userPost.text.length);
    setLastScrollHeight(textarea.scrollHeight);

    if (newlines > 0 && height > 27 && newlines < lastLineLength) {
      setHeight(height - 21);
    } else if (userPost.text.length === 0) {
      setHeight(27);
    } else {
      setHeight(scrollHeight);
    }
  }, [userPost.text]);

  return (
    <div className="bg-gray-700 bg-opacity-30 relative flex flex-col p-4 rounded-lg gap-3.5 max-h-[720px] overflow-hidden ">
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-1.5">
          <div className="bg-gray-500 rounded-full w-11 h-11"></div>
          <header className="font-medium">Profile Name</header>
        </button>
        <div className="text-gray-400">{userPost.text.length} / 2000</div>
      </div>
      <div>
        <textarea
          maxLength={2000}
          ref={userPostRef}
          value={userPost.text}
          onChange={handlePostChange}
          style={{ height: `${height}px` }}
          className="text-base resize-none w-full bg-transparent max-h-[570px]"
          placeholder="What's going on?"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <i className="opacity-30 hover:opacity-40 duration-200 cursor-not-allowed fa-regular fa-images"></i>
          <i className="opacity-30 hover:opacity-40 duration-200 cursor-not-allowed fa-solid fa-icons"></i>
          <i className="opacity-30 hover:opacity-40 duration-200 cursor-not-allowed fa-solid fa-list-ul"></i>
        </div>
        <button className="text-gray-500 bg-black bg-opacity-40 rounded-full px-5 h-10 text-base font-medium border-2 border-solid border-gray-500 hover:border-blue-400 hover:text-blue-400   duration-300">
          Send
        </button>
      </div>
    </div>
  );
}
