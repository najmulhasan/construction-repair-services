import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const SignUp = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { user, setUser } = useAuth();

  // Added later for error debugging
  useEffect(() => {
    user?.email && navigate(from, { replace: true });
  }, [from, navigate, user?.email]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => processLogin(data);
  const [loginError, setLoginError] = useState("");

  const processLogin = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "user",
    };

    let btn = document.getElementById("signup_btn");
    btn.innerText = "Processing Sign Up ...";
    btn.disabled = true;

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.status) {
          setUser(result.user);
          setLoginError("");
          localStorage.setItem("uId", result.user._id);
          result.user.role === "user" && navigate("/services");
          result.user.role === "admin" && navigate("/admin");
        } else {
          setLoginError(result.message);
          document.getElementById("signup_form").reset();
          btn.innerText = "Sign Up";
          btn.disabled = false;
        }
      } catch (error) {
        fetchData();
      }
    };
    fetchData();
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="signup_form"
        className="lg:w-1/3 xl:1/2 w-full mx-auto flex content-center items-center h-96 px-5"
      >
        <div className="w-full">
          <h1 className="text-center text-xl my-5">User Registration</h1>

          <div className="my-2">
            <input
              placeholder="Enter Name"
              autoComplete={`username`}
              className="w-full p-2 border-2 border-sky-600 focus:outline-sky-800 rounded"
              type="text"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-rose-500">*Name required</span>
            )}
          </div>

          <div className="my-2">
            <input
              placeholder="Enter Email"
              autoComplete={`email`}
              className="w-full p-2 border-2 border-sky-600 focus:outline-sky-800 rounded"
              type="email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-rose-500">*Email required</span>
            )}
          </div>

          <div className="my-2">
            <input
              placeholder="Enter Password"
              autoComplete={`current-password`}
              className="w-full p-2 border-2 border-sky-600 focus:outline-sky-800 rounded"
              type="password"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-rose-500">*Password required</span>
            )}
          </div>

          <p className="my-2 text-rose-900 font-bold">{loginError}</p>
          <p className="my-5">
            Have an Account?{" "}
            <Link className="underline" to="/login">
              Login
            </Link>
          </p>
          <input
            id="signup_btn"
            type="submit"
            className="bg-sky-700 hover:bg-sky-800 text-white w-[100%] py-2 rounded-md"
            value="Sign Up"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
