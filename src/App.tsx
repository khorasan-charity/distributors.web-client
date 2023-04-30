import { RouterProvider } from "react-router-dom";
import router from "./ui/router";
import { getAuthProviders } from "./application/auth/getAuthProviders";
import { getSnackProvider } from "./application/auth/getSnackProvider";

const AuthProviders = getAuthProviders();
const SnackProvider = getSnackProvider();

function App() {
  return (
    <div>
      <AuthProviders>
        <SnackProvider />
        <RouterProvider router={router} />
      </AuthProviders>
    </div>
  );
}

export default App;
