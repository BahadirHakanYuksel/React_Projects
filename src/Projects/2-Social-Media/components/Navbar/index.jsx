import classNames from "classnames";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;

  const { user } = useSelector((state) => state.app);

  const navMenu = [
    {
      url: "/social-media/",
      text: "Home",
      iconUrl: "",
    },
    {
      url: "/social-media/discover",
      text: "Discover",
      iconUrl: "",
    },
    {
      url: user ? "/social-media/:username" : "/social-media/register",
      text: user ? "Profile" : "Register",
      iconUrl: "",
    },
  ];

  return (
    <nav className="w-full h-14 social-media-navbar items-center justify-between mb-5">
      <button
        onClick={() => navigate("/social-media/")}
        className="text-2xl font-medium text-slate-400 flex items-center justify-start"
      >
        Social Media App
      </button>
      <div className="flex items-center justify-center  gap-3.5">
        {navMenu.map((linkBtn, i) => (
          <button
            className={classNames("h-10 px-3.5 rounded-lg text-lg", {
              "!text-blue-400 bg-gray-800 duration-200":
                linkBtn.url === pathName,
            })}
            onClick={() => navigate(linkBtn.url)}
            key={i}
          >
            {linkBtn.text}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-end">
        <input
          type="search"
          className="bg-gray-700 rounded-md h-9 text-white px-2.5 w-full"
          placeholder="Search User"
        />
      </div>
    </nav>
  );
}
