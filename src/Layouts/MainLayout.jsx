import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div
      className="bg-gradient-to-t to-slate-900 from-black min-h-screen
    "
    >
      <Outlet />
    </div>
  );
}
