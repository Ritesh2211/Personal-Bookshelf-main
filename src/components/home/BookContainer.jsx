import React, { useEffect } from "react";
import Bookcard from "./Bookcard";
import Loader from "../common/Loading";
import { fetchBooks } from "../../redux/book/action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const BookContainer = () => {
  const { loading, error, books, searchBooks } = useSelector(
    (state) => state.books
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    // eslint-disable-next-line
  }, []);
  const getBookKey = (url) =>{
    const parts = url.split("/");
    const bookKey = parts[parts.length - 1];
    return bookKey
  }
  return (
    <>
      <section
        className={`flex gap-8 m-4 mt-8 ${
          loading ? "h-screen" : ""
        } justify-around flex-wrap`}
      >
        {error && (
          <p className="bg-gray-700 text-red-500 font-semibold text-center ">
            Some Error occured: {error}
          </p>
        )}
        {loading ? (
          <Loader />
        ) : searchBooks.length > 0 ? (
          searchBooks.map((each, index) => {
            const bookKey = getBookKey(each.key)
            return (
                <Bookcard
                keys={bookKey}
                title={each.title}
                author={each.author_name}
                edition={each.edition_count}
                id={`${bookKey}${index}`}
                isbn={each.isbn}
              />
            );
          })
        ) : (
          books.map((each, index) => {
            const bookKey = getBookKey(each.key)
            return (
                <Bookcard
                keys={bookKey}
                title={each.title}
                author={each.author_name}
                edition={each.edition_count}
                id={`${bookKey}${index}`}
                isbn={each.isbn}
              />
            
            );
          })
        )}
      </section>
    </>
  );
};

export default BookContainer;
