import React from "react";

export default function RightSideBar() {
  const users = [
    {
      name: "Jane Doe",
      username: "janedoe",
      img_url: "https://randomuser.me/api/portraits",
    },
    {
      name: "Alice",
      username: "alice",
      img_url: "https://randomuser.me/api/portraits",
    },
    {
      name: "Bob",
      username: "bob",
      img_url: "https://randomuser.me/api/portraits",
    },
  ];

  return (
    <div className="pl-5 sticky top-0 right-0">
      <div className="p-3 rounded-lg bg-gray-400 bg-opacity-10">
        <header className="text-xl font-medium text-gray-500 px-1">
          People You Can Follow
        </header>
        <div className="flex flex-col items-start gap-2.5 mt-3">
          {users.map((user, i) => (
            <button
              key={i}
              className="text-gray-300 bg-transparent hover:bg-black duration-200 w-full flex items-center justify-start gap-1.5 h-11 px-1 rounded-full hover:text-gray-100"
            >
              <div className="h-9 w-9 rounded-full bg-gray-700"></div>
              <span>{user.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
