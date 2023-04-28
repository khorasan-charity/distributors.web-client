import { createHashRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Login from "./pages/auth/Login";

const router = createHashRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/home",
        element: <div>Home</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
