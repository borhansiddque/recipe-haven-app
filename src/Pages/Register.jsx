import React, { useContext, useState } from "react";
import { PiChefHatLight } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { setUser, registerUser, updateUser, googleLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const regExUppercase = /(?=.*[A-Z])/;
    const regExLowercase = /(?=.*[a-z])/;
    const regExLength = /.{6,}/;
    if (!regExUppercase.test(password)) {
      setError("Password must have at least one uppercase letter (A-Z)");
      return;
    }
    if (!regExLowercase.test(password)) {
      setError("Password must have at least one lowercase letter (a-z)");
      return;
    }
    if (!regExLength.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    }
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
            toast.success("Create Account Successfully");
          })
          .catch((error) => {
            toast.error(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
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
            <h3 className="text-3xl font-bold">Create an account</h3>
            <p className="opacity-80">
              Join Recipe Book to share your culinary creations
            </p>
          </div>
          <form onSubmit={handleRegister} className="space-y-5 mt-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="w-full bg-base-100 text-base-content border border-base-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-sm"
                required
                placeholder="ex: John Doe"
              />
            </div>
            <div>
              <label htmlFor="photo" className="block text-sm font-medium mb-1">
                Photo URL
              </label>
              <input
                name="photo"
                type="text"
                id="photo"
                className="w-full bg-base-100 text-base-content border border-base-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-sm"
                required
                placeholder="Photo URL: https://imgbb.com/"
              />
            </div>
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
            <div className="">
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
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors font-medium cursor-pointer"
            >
              Create Account
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
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default Register;
