import { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

const AdminAddService = () => {
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();
  const [data, setData] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/admin/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setData({
          service: "",
          description: "",
          price: "",
          provider: "",
        });
        navigate("/admin/services");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-2">
            <label
              htmlFor="service"
              className="text-lg text-white font-semibold mb-1"
            >
              Service
            </label>
            <input
              value={data.service}
              onChange={handleInput}
              type="text"
              placeholder="Enter your service name"
              name="service"
              className="w-80 rounded-md py-1 px-2 text-sm font-semibold text-gray-800 outline-none focus:border-blue-500 border-2"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-lg text-white font-semibold mb-1"
            >
              Description
            </label>
            <textarea
              value={data.description}
              onChange={handleInput}
              autoComplete="off"
              name="description"
              id=""
              className="w-80 h-44 rounded-md py-1 px-2 text-sm font-semibold text-gray-800 outline-none focus:border-blue-500 border-2"
            ></textarea>
          </div>
          <div className="flex flex-col mb-2">
            <label
              htmlFor="price"
              className="text-lg text-white font-semibold mb-1"
            >
              Price
            </label>
            <input
              value={data.price}
              onChange={handleInput}
              type="text"
              placeholder="Enter your price"
              name="price"
              className="w-80 rounded-md py-1 px-2 text-sm font-semibold text-gray-800 outline-none focus:border-blue-500 border-2"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label
              htmlFor="provider"
              className="text-lg text-white font-semibold mb-1"
            >
              Provider
            </label>
            <input
              value={data.provider}
              onChange={handleInput}
              type="text"
              placeholder="Enter your provider name"
              name="provider"
              className="w-80 rounded-md py-1 px-2 text-sm font-semibold text-gray-800 outline-none focus:border-blue-500 border-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 rounded-lg py-1 text-lg text-slate-100 font-bold my-4 px-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddService;
