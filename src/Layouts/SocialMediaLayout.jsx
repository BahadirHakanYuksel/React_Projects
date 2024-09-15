import { Outlet } from "react-router-dom";
import Navbar from "../Projects/2-Social-Media/components/Navbar";
import "../Css_Files/2-Social-Media.css";
import { Provider } from "react-redux";
import { SocialMediaStore } from "../Projects/2-Social-Media/socialMediaStore";

export default function SocialMediaLayout() {
  return (
    <Provider store={SocialMediaStore}>
      <div className="min-h-screen bg-black bg-opacity-80 text-white px-40 py-2.5">
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
}
