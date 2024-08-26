import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminServices = () => {
  const { authorizationToken } = useAuth();
  const [services, setServices] = useState([]);

  const getAllServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/service", {
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

  useEffect(() => {
    getAllServices();
  }, []);

  return <div>AdminnServices</div>;
};

export default AdminServices;
