import React from "react";
import LogIn from "../LogIn/LogIn";

const SignIn = () => {
  return (
    <div
      className="p-6 w-[calc(100%-256px)] md:ml-64 flex justify-center items-center bg-cover"
      style={{ backgroundImage: "url('../src/assets/bg.jpg')" }}
    >
      <LogIn />
    </div>
  );
};

export default SignIn;
