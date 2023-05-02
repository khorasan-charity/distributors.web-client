import { Outlet } from "react-router-dom";
import Drawer from "../components/drawer/Drawer";

const BaseLayout = () => {
  return (
    <div className="bg-slate-100 h-screen w-full overflow-hidden">
      <Drawer />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
