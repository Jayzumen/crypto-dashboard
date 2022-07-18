import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Top Crypto",
      link: "/topCrypto",
    },
    {
      id: 3,
      name: "Crypto Converter",
      link: "/converter",
    },
    {
      id: 4,
      name: "News",
      link: "/news",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white px-4 fixed z-10 bg-gradient-to-b from-slate-800 to-slate-900">
      <div>
        <h1 className="text-4xl font-serif m-2 text-gray-300 ">
          <a href="/">Crypto Space</a>
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105
         duration-200"
          >
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center text-center items-center absolute top-0 left-0 w-full
   h-screen bg-gradient-to-r from-slate-800 to-slate-900 text-gray-300"
        >
          {links.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} to={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
