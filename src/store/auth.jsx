import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [services, setServices] = useState();
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const isLogedIn = !!token;

  const getUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();

        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const serviceData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();

        setServices(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    serviceData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLs,
        LogoutUser,
        isLogedIn,
        user,
        services,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  return authContextValue;
};
