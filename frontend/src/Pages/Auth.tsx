import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { notify } from "../App";
import { registerUser, login } from '../Services/userApi';
import { useGlobalContext } from "../Contexts";

type Inputs = {
  name?: string,
  email: string,
  password: string
}


export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { setAuth, setUser } = useGlobalContext();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = isSignup ? await registerUser(data) : await login(data);
      if (response && response.token) {
        setUser(response);
        localStorage.setItem("auth", response.token);
        setAuth(true);
        notify("Success");
      } else {
        notify("Authentication failed");
      }
    } catch (error) {
      notify("Network or server error");
    }
  }

  useEffect(() => {
    if (errors.name && errors.name.message) {
      notify(errors.name.message);
    }
    if (errors.email && errors.email.message) {
      notify(errors.email.message);
    }
    if (errors.password && errors.password.message) {
      notify(errors.password.message);
    }
  }, [errors]);

  return (
    <form
      className="flex flex-col gap-4 justify-center items-center w-full h-screen"
      onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-6xl mb-4 flex">Chat App 📱</h1>
      {isSignup ? (
        <>
          <h1 className="text-4xl">Signup</h1>
          <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input className="py-2 px-4 rounded-md" maxLength={12} {...register("name", { required: "Name is required", maxLength: 12 })} placeholder="Name" />
          </label>
        </>
      ) : (
        <h1 className="text-4xl">Login</h1>
      )}
      <label className="input input-bordered flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
        <input className="py-2 px-4 rounded-md" {...register("email", { required: "email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" }, })} placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
        <input className="py-2 px-4 rounded-md" type="password" {...register("password", { minLength: { value: 6, message: "Password must be at least 6 characters" }, required: "Password is required" })} placeholder="Password" />
      </label>
      {!isSignup ? (
        <h6>Don't have an account? <a href="#" onClick={() => setIsSignup(true)}><span className="group text-slate-200">Signup</span></a></h6>
      ) : (
        <h6>Already have an account? <a href="#" onClick={() => setIsSignup(false)}><span className="group text-slate-200">Login</span></a></h6>
      )}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">{isSignup ? "Signup" : "Login"}</button>
    </form>
  );
}