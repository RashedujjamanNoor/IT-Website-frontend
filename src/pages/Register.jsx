import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(user);

  return (
    <>
      <div className="my-8 mx-[5%] text-white md:flex justify-between items-center md:mx-[10%]">
        <div>
          <img src="home.svg" alt="" />
        </div>
        <div className="my-4  rounded-md md:mr-28 flex flex-col justify-center items-center mt-8">
          <h1 className="font-bold text-3xl text-center mb-3 md:text-4xl">
            Registration Form
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 justify-center "
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-lg font-semibold">
                User Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="username"
                className="outline-none focus:outline-blue-500 border-blue-500 rounded-md px-2 py-1 text-black text-sm font-semibold w-80"
                value={user.username}
                onChange={handleInput}
              />
            </div>
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
              <label htmlFor="phone" className="text-lg font-semibold">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone"
                className="outline-none focus:outline-blue-500 border-blue-500 rounded-md px-2 py-1 text-black text-sm font-semibold w-80"
                value={user.phone}
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
              Register Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
