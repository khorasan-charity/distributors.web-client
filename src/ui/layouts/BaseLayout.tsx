import { Outlet } from "react-router-dom";
import Drawer from "../components/drawer/Drawer";

const BaseLayout = () => {
  return (
    <div className="bg-slate-100 h-screen w-full flex overflow-hidden">
      <Drawer />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
