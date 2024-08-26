import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { isLogedIn, user } = useAuth();
  return (
    <div className="bg-gray-900 text-blue-400 font-bold shadow-xl sticky top-0">
      <header className="flex justify-between items-center py-3 mx-[5%] md:mx-[10%]">
        <div>
          <h1 className="text-2xl md:text-4xl">Noor.</h1>
        </div>
        <div
          className="font-bold text-2xl relative md:hidden"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoClose /> : <GiHamburgerMenu />}
        </div>
        {menu && (
          <ul className="flex flex-col justify-center items-center gap-4 absolute bg-gray-800  px-8 py-3 w-1/3 right-0 top-14 rounded-lg shadow-xl  transition-all ease-in duration-300">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            {isLogedIn ? (
              <>
                {user.isAdmin && (
                  <li>
                    <NavLink to="/admin">Admin</NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        )}
        <nav className="hidden md:block">
          <ul className=" md:flex justify-between items-center gap-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            {isLogedIn ? (
              <>
                {user.isAdmin && (
                  <li>
                    <NavLink to="/admin/users">Admin</NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
