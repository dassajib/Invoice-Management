import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthProvider";

const LOGIN_URL = "http://127.0.0.1:8000/user/login/";
const LogIn = () => {
  const navigate = useNavigate("");

  const { setAuth } = useAuth();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        { email: user, password }
        // {
        //   headers: { "Content-Type": "application/json" },
        //   withCredentials: true,
        // }
      );
      console.log(JSON.stringify(response?.data?.access));
      const accessToken = response?.data?.access;
      // save data to localstorage
      localStorage.setItem('user', JSON.stringify({ user, password, accessToken }));
      setAuth({ user, password, accessToken });
      setUser("");
      setPassword("");
      navigate("/dashboard");
    } catch (error) {
      if (!error.response) {
        setError("No Server Found");
      } else if (error.response?.status === 400) {
        setError("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setError("Unauthorized");
      } else {
        setError("Login Failed");
      }
    }
  };

  return (
    <div
      className="h-[100vh] text-white flex justify-center items-center bg-cover"
      style={{ backgroundImage: "url('../src/assets/bg.jpg')" }}
    >
      <div className=" bg-slate-800 border border-slate-600 rounded-md shadow-lg p-8 backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
        <h1 className="text-4xl text-white font-bold  text-center mb-6">
          Login
        </h1>
        {error ? <p className="text-center">{error}</p> : null}
        <form onSubmit={handleLogin}>
          <div className="relative my-4">
            <input
              id="email"
              type="email"
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              autoComplete="off"
              required
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
            <BiUser className="absolute top-4 right-4" />
          </div>
          <div className="relative my-4">
            <input
              id="password"
              type="password"
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-4" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Remember Me">Remember Me</label>
            </div>
            <Link to="" className="text-blue-500">
              Forgot Password?
            </Link>
          </div>
          <button
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
            type="submit"
          >
            Login
          </button>
          <div>
            <span className="m-4">
              New Here?
              <Link to="/registration" className="text-blue-500">
                Create an Account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
