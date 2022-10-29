import React from "react";
import logo from "../../assets/logo.png";
const Navbar = ({ children }) => {
  const menu = (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#features">Features</a>
      </li>
      <li>
        <a href="#home">Screenshots</a>
      </li>
      <li>
        <a href="#home">Support</a>
      </li>
      <li>
        <a href="#home">Pricing</a>
      </li>
      <li>
        <a href="#home">Blog</a>
      </li>
      <li>
        <a href="#home">Contact</a>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-transparent container mx-auto z-10 text-white">
          <div className="flex-1 px-2 mx-2">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              {menu}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
