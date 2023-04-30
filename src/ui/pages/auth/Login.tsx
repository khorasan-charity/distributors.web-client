import { useLoginUser } from "../../../application/user/loginUser";
import useForm from "../../hooks/useForm";

interface FormData {
  username: string;
  password: string;
}

const Login = () => {
  const { loginUser } = useLoginUser();
  const { formData, handleSubmit, onFieldChange } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const { username, password } = data;
    if (username && password) {
      await loginUser(username.toString(), password.toString());
    }
  };

  return (
    <div className="w-full h-screen bg-slate-800 text-white">
      <form
        onSubmit={e => handleSubmit(e, onSubmit)}
        className="space-y-10 justify-center items-center w-[500px] p-5"
      >
        <div className="space-x-3">
          <label htmlFor="username">Username</label>
          <input
            value={formData.username}
            onChange={onFieldChange}
            type="text"
            className="border text-black"
            name="username"
            id="username"
          />
        </div>
        <div className="space-x-3">
          <label htmlFor="password">Password</label>
          <input
            value={formData.password}
            onChange={onFieldChange}
            className="border text-black"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button
          className="bg-orange-500 w-[300px] py-2 px-4 rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
