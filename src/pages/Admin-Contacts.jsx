import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contacts, setContacts] = useState([]);

  const getAllContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      console.log(data);
      getAllContacts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div>
      <div className="text-white flex flex-col justify-center items-center  md:mx-[10%]">
        <h1 className="font-bold mb-3">All Users</h1>
        <div>
          <table>
            <thead>
              <tr className="grid grid-cols-4 gap-5 justify-items-center items-center">
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts &&
                contacts.map((contact, index) => (
                  <tr
                    key={index}
                    className="grid grid-cols-4 gap-16 justify-items-center items-center my-3 py-2 px-2 bg-slate-800 text-sm"
                  >
                    <td>{contact.username}</td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td>
                    <td className="flex flex-col gap-2 font-bold">
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="bg-slate-300 text-gray-800 rounded-md px-1"
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

export default AdminContacts;
