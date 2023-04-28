import { createHashRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";

const router = createHashRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <div>Main Page</div>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <div>About</div>
          </PrivateRoute>
        ),
      },
      {
        path: "/home",
        element: (
          <PrivateRoute>
            <div>Home</div>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
