import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h2 className="text-9xl">404</h2>
      <h3 className="text-2xl">Oops! Page Not Found</h3>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button className="btn bg-primary mt-5">
        <NavLink to="/">Go To Home</NavLink>
      </button>
    </div>
  );
};

export default Error;
