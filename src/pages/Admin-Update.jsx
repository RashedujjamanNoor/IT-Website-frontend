import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";

const AdminUpdate = () => {
  const { authorizationToken } = useAuth();
  const { id } = useParams();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const getUser = async () => {
    const response = await fetch(
      `http://localhost:5000/api/admin/users/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
      }
    );

    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  console.log(user);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending data:", JSON.stringify(user));
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("response data:", data);

        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="my-8 mx-[5%] text-white md:flex justify-center items-center md:mx-[10%]">
        <div className="md:mx-5">
          <img src="home.svg" alt="" />
        </div>
        <div className="my-4  rounded-md md:mr-28 flex flex-col justify-center items-center mt-8">
          <h1 className="font-bold text-3xl text-center mb-3 md:text-4xl">
            Registration Form
          </h1>
          <form
            onSubmit={handleUpdate}
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

            <button
              type="submit"
              className="bg-blue-600 rounded-lg py-1 text-lg font-bold my-4"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminUpdate;
