import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminUsers = () => {
  const { authorizationToken } = useAuth();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(users);

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="text-white flex flex-col justify-center items-center  md:mx-[10%]">
        <h1 className="font-bold mb-3">All Users</h1>
        <div>
          <table>
            <thead>
              <tr className="grid grid-cols-4 gap-5 justify-items-center items-center">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="grid grid-cols-4 gap-16 justify-items-center items-center my-3 py-2 px-2 bg-slate-800 text-sm"
                >
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td className="flex flex-col gap-2 font-bold">
                    <button className="bg-slate-300 text-gray-800 rounded-md px-1">
                      Edit
                    </button>
                    <button className="bg-slate-300 text-gray-800 rounded-md px-1">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
