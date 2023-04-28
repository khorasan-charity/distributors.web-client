import { Outlet, createHashRouter, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/home")}>
      Main
      <Outlet />
    </div>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/home",
        element: <div>Home</div>,
      },
    ],
  },
]);

export default router;
