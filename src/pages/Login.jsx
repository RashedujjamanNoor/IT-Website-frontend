import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const { storeTokenInLs } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const resData = await response.json();
      if (response.ok) {
        storeTokenInLs(resData.token);
        setUser({
          email: "",

          password: "",
        });
        navigate("/");
      } else {
        alert(resData.extraDetails ? resData.extraDetails : resData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="my-8 mx-[5%] text-white md:flex justify-between items-center md:mx-[10%]">
        <div className="md:mx-5">
          <img src="home.svg" alt="" />
        </div>
        <div className="my-4  rounded-md md:mr-28 flex flex-col justify-center items-center mt-8">
          <h1 className="font-bold text-3xl text-center mb-3 md:text-4xl">
            Login Form
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 justify-center "
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="outline-none focus:outline-blue-500 border-blue-500 rounded-md px-2 py-1  text-black text-sm font-semibold w-80"
                value={user.email}
                onChange={handleInput}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-lg font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="outline-none focus:outline-blue-500 border-blue-500 rounded-md px-2 py-1 text-black text-sm font-semibold w-80"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 rounded-lg py-1 text-lg font-bold my-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
