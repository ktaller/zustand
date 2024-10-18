import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="h-12 w-full bg-orange-400 text-black mx-auto flex items-center justify-around md:w[80vh]">
        <img className="w-16 m-2" src="/images/logo.png" alt="logo" />
        <a href=""></a>
        <nav className="w-1/2">
          <ul className="w-full flex justify-around">
            <li>
              <Link to={"/"}>Home </Link>
            </li>
            <li>
              <Link to={"/about"}> About </Link>{" "}
            </li>
            <li>
              <Link to={"/services"}> Services </Link>
            </li>
            <li>
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:text-black">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:text-black transition duration-200 ml-5">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
        <img
          className="w-10 md:hidden mr-7"
          src="/images/hamburger-menu-svgrepo-com.svg"
          alt="menu"
        />
        {/* <div className="ms-2">
          <button className="ms-2 m-6 p-1 bg-purple-600 rounded">Login</button>
          <button className="ms-2 m-6 p-1 bg-purple-600 rounded">Signup</button>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
