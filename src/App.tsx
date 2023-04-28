import { Outlet, RouterProvider } from "react-router-dom";
import router from "./ui/router";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
