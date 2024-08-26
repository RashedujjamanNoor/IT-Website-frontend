import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

const AdminServices = () => {
  const { authorizationToken } = useAuth();
  const [services, setServices] = useState([]);

  const getAllServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/services", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/services/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        getAllServices();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <div>
      <div className="text-white flex flex-col justify-center items-center  md:mx-[10%]">
        <h1 className="font-bold mb-3">All Users</h1>
        <div>
          <Link to="create">
            <button className="bg-blue-700 text-white font-bold rounded-md px-2 py-1">
              ADD
            </button>
          </Link>
          <table>
            <thead>
              <tr className="grid grid-cols-5 gap-5 justify-items-center items-center">
                <th>Service</th>
                <th>Description</th>
                <th>Price</th>
                <th>Provider</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {services &&
                services.map((service, index) => (
                  <tr
                    key={index}
                    className="grid grid-cols-5 gap-16 justify-items-center items-center my-3 py-2 px-2 bg-slate-800 text-sm"
                  >
                    <td>{service.service}</td>
                    <td>{service.description}</td>
                    <td>{service.price}</td>
                    <td>{service.provider}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(service._id)}
                        className="bg-slate-300 text-gray-800 rounded-sm font-bold px-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
