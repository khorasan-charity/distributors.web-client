import { useLoginUser } from "../../../application/user/loginUser";

const Login = () => {
  const { loginUser } = useLoginUser();

  const handleLoginClick = async () => {
    await loginUser("admin@example.com", "adminadmin");
  };

  return (
    <div>
      <button className="bg-purple-400" onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
