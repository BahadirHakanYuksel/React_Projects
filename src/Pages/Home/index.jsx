import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-16 items-center justify-center">
      <header className="bg-gradient-to-tr to-white from-slate-400 bg-clip-text text-transparent text-7xl font-medium">
        Welcome to Bahadır's Projects
      </header>
      <NavLink
        className="text-3xl px-10 py-5 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-800 duration-300 flex items-end gap-2.5 hover:gap-5"
        to="/tasks"
      >
        <span>Go to React Projects</span>
        <i className="fa-solid fa-arrow-right-long"></i>
      </NavLink>
    </div>
  );
}
