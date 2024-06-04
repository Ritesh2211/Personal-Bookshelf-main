import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillBackspaceFill } from "react-icons/bs";
import { fetchSearchedBooks } from "../../redux/book/action";
import { useDispatch } from "react-redux";
import "../../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    // dispatch(fetchSearchedBooks(e.target.value));
  };
  const handleSearchClick = () => {
    dispatch(fetchSearchedBooks(search));
  };
  return (
    <>
      <nav className="w-full h-16 flex  phone:justify-between tablet:justify:around laptop:justify-around bg-black text-white  ">
        <div className="flex gap-2 phone:mx-2 tablet:mx-8 laptop:mx-12 my-auto   ">
          <img
            src="/book.png"
            className=" phone:h-8 tablet:h-8 tablet:w-8 laptop:h-12 laptop-12 desktop:h-12 w-12  my-auto cursor-pointer"
            alt="bookshelf"
          />

          <Link className="  phone:hidden  tablet:block laptop:block" to="/">
            {" "}
            <p className=" phone:text-sm tablet:text-xl hover:border-b-4  hover:border-cyan-600 laptop:text-2xl cursor-pointer font-semibold p-1">
              Home
            </p>
          </Link>
          <Link
            className="  phone:hidden   tablet:block laptop:block"
            to="/bookshelf"
          >
            {" "}
            <p className=" phone:text-sm tablet:text-xl  hover:border-b-4  hover:border-cyan-600 laptop:text-2xl cursor-pointer font-semibold p-1">
              BookShelf
            </p>
          </Link>

          <div className="phone:block tablet:hidden laptop:hidden ">
            <section className="MOBILE-MENU flex ">
              <div
                className="HAMBURGER-ICON cursor-pointer  space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-1 w-8 mx-2 mt-1 mb-1 bg-gray-100 rounded-full animate-pulse "></span>
                <span className="block h-1 w-8 mx-2 mt-1 mb-1 bg-gray-100 rounded-full animate-pulse "></span>
                <span className="block h-1 w-8 mx-2 mt-1 mb-1 bg-gray-100 rounded-full animate-pulse "></span>
              </div>

              <div
                className={`bg-black  ${
                  isNavOpen ? "showMenuNav" : "hideMenuNav"
                }`}
              >
                {" "}
                <div
                  className="CROSS-ICON cursor-pointer absolute top-0 right-0 p-2"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex w-full text-xl flex-col items-center justify-evenly min-h-[250px]">
                  <li className="border-b border-gray-400 text-xl hover:border-b-2  hover:border-cyan-600  ">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="border-b border-gray-400 text-xl hover:border-b-2  hover:border-cyan-600 ">
                    <Link to="/bookshelf">BookShelf</Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className=" my-auto relative   mobile:w-1/2 tablet:w-1/3   flex gap-2 ">
          <input
            type="text"
            value={search}
            placeholder="Search books"
            onChange={(e) => handleSearch(e)}
            className="text-black w-11/12 h-4/5 p-2 rounded-xl"
          />
          <BsFillBackspaceFill
            onClick={() => setSearch("")}
            className="absolute text-black right-14 top-2 text-2xl cursor-pointer"
          />
          <FaMagnifyingGlass
            onClick={handleSearchClick}
            className="text-2xl cursor-pointer m-1 mr-4"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
