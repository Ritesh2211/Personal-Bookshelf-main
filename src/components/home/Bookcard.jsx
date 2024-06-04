import React from "react";
import { FaPlus, FaX } from "react-icons/fa6";
import { addToBookShelf, removeFromBookShelf } from "../../redux/book/action";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import { Link } from "react-router-dom";

const Bookcard = ({ keys, title, author, edition, id, isbn }) => {
  const { bookShelf } = useSelector((state) => state.books);
  let isInBookShelf = bookShelf.find((each) => each.id === id);
  
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToBookShelf({keys, title, author, edition, id, isbn }));
  };
  const handleRemove = () => {
    dispatch(removeFromBookShelf({keys, title, author, edition, id }));
  };
  const cover =
    "https://dfb503wu29eo2.cloudfront.net/slir/h1200/png24-front/bookcover0010361.jpg";
  const img = (isbn && isbn[1]) || cover;
  return (
    <>
      <section className="text-white shadow-2xl shadow-slate-700/50 relative phone:w-48 phone:h-64  tablet:w-52 tablet:h-64 laptop:w-64 laptop:h-80 rounded-xl">
      <Link
          to= {`/bookdetails/${keys}/${id}`}
          key={keys}
        >
          <div className="w-full h-full">
            <img
              src={`https://covers.openlibrary.org/b/isbn/${img}-L.jpg`}
              alt="book"
              className="w-full h-full z-1 rounded-xl"
            />
          </div>
        </Link>
        <div className="absolute bottom-0 opacity bg-gray-900 w-full z-10 rounded-b-xl p-2">
          <p className="text-center text-gray-300 ">
            {" "}
            <span className="text-gray-500 "> Title:</span>
            <span className="font-bold">{title}</span>
          </p>
          <p className="text-center text-gray-300">
            {" "}
            <span className="text-gray-500"> Author:</span>{" "}
            <span className="italic">{author}</span>
          </p>
          <p className="text-center text-gray-400">
            {" "}
            <span className="text-gray-500"> Edition:</span> {edition}
          </p>
          <div>
            {isInBookShelf ? (
              <button
                onClick={() => handleRemove()}
                className="bg-red-500 flex items-center m-2 justify-center gap-1 hover:bg-red-700 mx-16 h-8 w-28 font-bold rounded-xl"
              >
                <FaX /> Remove
              </button>
            ) : (
              <button
                onClick={() => handleAdd()}
                className="bg-cyan-500 flex items-center m-2 justify-center gap-1 hover:bg-cyan-700 mx-16 h-8 w-28 font-bold rounded-xl "
              >
                <FaPlus /> Bookshelf
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bookcard;
