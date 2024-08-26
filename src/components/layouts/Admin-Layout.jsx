import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log(user);
  const navigate = useNavigate();
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (!user.isAdmin) {
    return navigate("/");
  }
  return (
    <>
      <div className="mx-[5%] md:mx-[10%]  ">
        <nav className="text-white ">
          <ul className="flex justify-center items-center gap-6 text-xl font-bold my-5">
            <NavLink to="users">
              <li>Users</li>
            </NavLink>
            <NavLink to="contacts">
              <li>Contacts</li>
            </NavLink>
            <NavLink to="services">
              <li>Services</li>
            </NavLink>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default AdminLayout;
