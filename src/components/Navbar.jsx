import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(true)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex rounded-full bg-gray-200 p-2 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      <div className="bg-gray-200 p-2 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      <button className="bg-black text-white rounded-full hidden md:flex items-center py-2">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      { nav && <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0" />}

      {/* For Mobile Menu */}

      <div className={ nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-300"}>
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <AiOutlineClose
          size={30}
          onClick={() => setNav(false)}
          className="absolute top-4 right-4 cursor-pointer"
        />
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery className="mr-4" size={25} /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite className="mr-4" size={25} /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet className="mr-4" size={25} /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp className="mr-4" size={25} /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag className="mr-4" size={25} /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill className="mr-4" size={25} /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends className="mr-4" size={25} /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
