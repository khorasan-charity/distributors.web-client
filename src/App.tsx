import { RouterProvider } from "react-router-dom";
import router from "./ui/router";
import { getAuthProviders } from "./application/auth/getAuthProviders";

const AuthProviders = getAuthProviders();

function App() {
  return (
    <div>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </div>
  );
}

export default App;
