import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center">
      <header className="text-7xl font-medium text-gray-400">
        Page Not Found !
      </header>
      <NavLink
        className="text-3xl px-10 py-5 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-800 duration-300 flex items-end gap-2.5 hover:gap-5"
        to="/"
      >
        <span>Go Homepage</span>
        <i className="fa-solid fa-arrow-right-long"></i>
      </NavLink>
    </div>
  );
}
