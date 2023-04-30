import { useLogoutUser } from "../../application/user/logoutUser";

export default function LogoutButton() {
  const { logoutUser } = useLogoutUser();
  return (
    <button
      onClick={logoutUser}
      className="bg-white text-black px-2 py-1 rounded-sm"
    >
      Logout
    </button>
  );
}
