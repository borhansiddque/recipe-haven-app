import React, { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { PiChefHatLight } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        toast.success(`You Login Successfully | Welcome ${user.displayName}`);
      })
      .catch((error) => {
        const msg = error?.message || "Login failed due to unknown error";
        setError(
          "Your Login Information is invalid - Please Check Email or Password"
        );
        toast.error(msg);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        toast.success(`Welcome ${user.displayName} | You Login Successfully`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Fade direction="up" triggerOnce>
      <div className="px-2 bg-base-100 min-h-screen pt-16">
        <div className="max-w-md mx-auto w-full bg-base-200 p-4 sm:p-8 rounded-lg shadow-md my-16 text-base-content">
          <div className="text-center space-y-2">
            <PiChefHatLight className="h-16 w-16 mx-auto text-orange-500" />
            <h3 className="text-3xl font-bold">Welcome back!</h3>
            <p className="opacity-80">Login to your Recipe Book account</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5 mt-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="w-full bg-base-100 text-base-content border border-base-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                placeholder="ex: john.doe@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <div className="flex gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="pwd"
                  className="w-full bg-base-100 text-base-content border border-base-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  placeholder="******"
                />
                <input
                  className="accent-orange-400"
                  type="checkbox"
                  name=""
                  onChange={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="#"
                  className="font-medium text-orange-500 hover:text-orange-600"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors font-medium cursor-pointer"
            >
              Login
            </button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-base-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-base-200">Or continue with</span>
              </div>
            </div>
          </div>
          <div className="my-6 flex items-center justify-center">
            <button
              onClick={handleGoogleLogin}
              className="btn bg-base-100 text-base-content border-base-300"
            >
              <FcGoogle size={20} />
              Login with Google
            </button>
          </div>
          <p className="text-center font-medium">
            Don't have an account?{" "}
            <Link to="/register" className="text-orange-500">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default Login;
