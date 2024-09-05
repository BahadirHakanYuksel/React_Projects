import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-gradient-to-t to-gray-900 from-black">
      <Outlet />
    </div>
  );
}
