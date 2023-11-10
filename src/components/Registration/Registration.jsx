import axios from "axios";
import { useState } from "react";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const REGISTER_URL = "http://127.0.0.1:8000/user/registration/";

const Register = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await axios.post(
          REGISTER_URL,
          {
            email,
            firstName,
            lastName,
            password,
            confirm_password: confirmPassword,
          }
          // {
          //   headers: { "Content-Type": "application/json" },
          //   withCredentials: true,
          // }
        );
        console.log(response?.data);
        console.log(response?.accessToken);
        console.log(JSON.stringify(response));
        setSuccess(true);
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
        setConfirmPassword("");
        navigate("/")
      } catch (error) {
        if (!error?.response) {
          setError("No Server Response");
        } else if (error.response?.status === 409) {
          setError("Username Taken");
        } else {
          setError("Registration Failed");
        }
      }
    }
  };

  return (
    <div>
      <div
        className="h-[100vh] text-white flex justify-center items-center bg-cover"
        style={{ backgroundImage: "url('../src/assets/bg.jpg')" }}
      >
        <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
          <h1 className="text-4xl font-bold text-center mb-8">Register</h1>
          <p className="text-center">{error ? error : null}</p>
          <form onSubmit={handleRegistration}>
            <div className="relative my-4">
              <input
                id="email"
                type="email"
                className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="off"
                required
              />
              <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Email
              </label>
              <BiUser className="absolute top-4 right-4 text-slate-400" />
            </div>
            <div className="relative my-4">
              <input
                id="first-name"
                type="text"
                className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                autoComplete="off"
                required
              />
              <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your First Name
              </label>
              <BiUser className="absolute top-4 right-4 text-slate-400" />
            </div>
            <div className="relative my-4">
              <input
                id="last-name"
                type="text"
                className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                autoComplete="off"
                required
              />
              <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Last Name
              </label>
              <BiUser className="absolute top-4 right-4 text-slate-400" />
            </div>
            <div className="relative my-4">
              <input
                id="password"
                type="password"
                className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Password
              </label>
              <AiOutlineUnlock className="absolute top-4 right-4 text-slate-400" />
            </div>
            <div className="relative my-4">
              <input
                id="confirm-password"
                type="password"
                className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
              <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Comfirm Password
              </label>
              <AiOutlineUnlock className="absolute top-4 right-4 text-slate-400" />
            </div>
            <button
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
              type="submit"
            >
              Register
            </button>
            <div className="mt-2 items-center">
              <div className="my-4">
                <span>
                  Already Register?{" "}
                  <span className="text-blue-500">
                    <Link to="/">Login</Link>
                  </span>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
