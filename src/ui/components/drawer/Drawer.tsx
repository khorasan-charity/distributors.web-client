import {
  MdOutlineGroups,
  MdOutlineGroup,
  MdOutlineAssignment,
  MdOutlineSettings,
} from "react-icons/md";

const Drawer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white h-16 sm:flex sm:relative sm:flex-col sm:w-[150px] sm:h-full">
      <ul className="w-full h-full flex items-center justify-around sm:flex-col sm:justify-center sm:items-center sm:space-y-10">
        <li className="text-slate-700 p-2 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer sm:icon-button sm:space-y-2">
          <MdOutlineGroups className="text-2xl" />
          <span>موزعین</span>
        </li>
        <li className="text-slate-700 p-2 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer sm:icon-button sm:space-y-2">
          <MdOutlineGroup className="text-2xl" />
          <span>خیرین</span>
        </li>
        <li className="text-slate-700 p-2 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer sm:icon-button sm:space-y-2">
          <MdOutlineAssignment className="text-2xl" />
          <span>مأموریت‌ها</span>
        </li>
        <li className="text-slate-700 p-2 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer sm:icon-button sm:space-y-2">
          <MdOutlineSettings className="text-2xl" />
          <span>تنظیمات</span>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
