import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../root/Root";

const Navbar = () => {
  // const {pathname} = useLocation();

  const {addCard, addWistList} = useContext(UserContext);
  console.log(addCard)

  return (
    <div className={`navbar bg-primary flex justify-between items-center my-5 px-10`}>
      <div>
        <Link to="/" className="text-xl text-white font-bold">
          Gadget Heaven
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-white underline" : "hover:text-white"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-white underline" : "hover:text-white"}`
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-white underline" : "hover:text-white"}`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-white underline" : "hover:text-white"}`
            }
            to="/testimonials"
          >
            Testimonials
          </NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-cart-shopping p-2 cursor-pointer rounded-full bg-white">{addCard.length}</i>
          <i className="fa-regular fa-heart p-2 cursor-pointer rounded-full bg-white">{addWistList.length}</i>
        </div>
        <div className="dropdown block lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <i className="fa-solid fa-bars text-xl"></i>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-white underline" : "hover:text-white"}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-white underline" : "hover:text-white"}`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-white underline" : "hover:text-white"}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
