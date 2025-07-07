import React from "react";
import { useState } from "react";

const Login = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is",email)
    console.log("Password is",password)
    setemail('')
    setpassword('')
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form className="flex flex-col items-center justify-center" 
          onSubmit={(e)=>{
            submitHandler(e)
          }}
        >
          <input
            value={email}
            onChange={(e)=>{
             setemail(e.target.value)
            }}
            required
            className="border-2 border-emerald-600 py-3 px-4 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400"
            type="emai"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
            required
            className="border-2 border-emerald-600 py-3 px-4 rounded-full mt-3 text-xl outline-none bg-transparent placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="border-none bg-emerald-600 py-3 px-10 rounded-full text-xl text-white outline-none placeholder:text-white mt-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
