import { createHashRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import DonorPage from "./pages/Donor/DonorPage";

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
        path: "/distributor",
        element: (
          <PrivateRoute>
            <div>Dist</div>
          </PrivateRoute>
        ),
      },
      {
        path: "/donor",
        element: (
          <PrivateRoute>
            <DonorPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/assignment",
        element: (
          <PrivateRoute>
            <div>Assignment</div>
          </PrivateRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivateRoute>
            <div>Settings</div>
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
