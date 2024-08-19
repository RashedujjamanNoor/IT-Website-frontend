import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-blue-400 font-bold shadow-xl sticky top-0">
      <header className="flex justify-between items-center py-3 mx-[5%] md:mx-[10%]">
        <div>
          <h1 className="text-2xl md:text-4xl">Noor.</h1>
        </div>
        <nav>
          <ul className="hidden md:flex justify-between items-center gap-4">
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
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
