import React, { useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaPlus, FaX } from "react-icons/fa6";
import Loader from "../common/Loading";
import { fetchABook, addToBookShelf, removeFromBookShelf } from "../../redux/book/action";
import { useSelector, useDispatch } from "react-redux";
import Rating from "../common/RatingSection"
import { lightGreen } from '@mui/material/colors';

const BookDetails =()=> {

  const { bookKey , id} = useParams();
  
  const { loading, error, book, bookShelf } = useSelector(
    (state) => state.books
  );

  let isInBookShelf = bookShelf.find((each) => each.keys === bookKey);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToBookShelf({ 
      keys: bookKey,
      title:book[0]?.title, 
      author:book[0]?.author_name, 
      edition:book[0]?.edition_count, 
      id, 
      isbn:book[0]?.isbn[1]}))
  };
  const handleRemove = () => {
    dispatch(removeFromBookShelf({ 
      keys: bookKey,
      title:book[0]?.title, 
      author:book[0]?.author_name, 
      edition:book[0]?.edition_count, 
      id }));
  };
  useEffect(() => {
    dispatch(fetchABook(bookKey));
    // eslint-disable-next-line
  }, [bookKey]);
 
  if (loading) {
    return <Loader />;
  }
  const cover =
    "https://dfb503wu29eo2.cloudfront.net/slir/h1200/png24-front/bookcover0010361.jpg";
  const img = (book[0]?.isbn && book[0]?.isbn[200])  
  ||(book[0]?.isbn && book[0]?.isbn[100]) 
  ||(book[0]?.isbn && book[0]?.isbn[1])
  ||(book[0]?.isbn  && book[0]?.isbn[0])
  || cover;
  return (
    <div className='relative flex items-center justify-center w-full my-5 '>
        {error && (
          <p className="bg-gray-700 text-red-500 font-semibold text-center ">
            Some Error occured: {error}
          </p>
        )}
      <div className="flex w-[80rem] h-auto rounded-xl bg-neutral-950 bg-clip-border text-gray-700 shadow-md
      ">
        <div className="relative w-1/3 shrink-0 overflow-hidden rounded-xl rounded-r-none from-inherit text-gray-700">
          <img
            src={`https://covers.openlibrary.org/b/isbn/${img}-L.jpg`}
            alt="book"
            className="h-full w-full object-scale-down"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-cyan-500 antialiased">
            Book Details
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-slate-300 antialiased">
            {book[0]?.title}
          </h4>
          <h2 className="flex mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Author name :
            {
            book[0]?.author_key.map((key,i) => {
                return <Link to={`/author/${key}`}>
                  
                  <h2 className="font-sans text-l font-semibold text-blue-gray-900 hover:text-cyan-500 antialiased">
                    {i!=0 && ", "}
                    {book[0]?.author_name[i]}
                  </h2>
                </Link>
              })
            }
          </h2>
          <h2 className="mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Published in : {book[0]?.first_publish_year}
          </h2>
          <h2 className="mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Available in : {book[0]?.language && book[0]?.language.length} languages.
          </h2>
          <h2 className="mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Editions : {book[0]?.edition_count && book[0]?.edition_count}
          </h2>
          {
            book[0]?.ratings_average 
            && book[0]?.ratings_count 
            && <Rating 
            ratings_average= {book[0]?.ratings_average}
            ratings_count = {book[0]?.ratings_count}
            star5 = {book[0]?.ratings_count_5}
            star4 = {book[0]?.ratings_count_4}
            star3 = {book[0]?.ratings_count_3}
            star2 = {book[0]?.ratings_count_2}
            star1 = {book[0]?.ratings_count_1}
            />}      
          <h2 className="mt-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Subject : {book[0]?.subject && book[0]?.subject.slice(0,5).join(', ')} 
          </h2>    
          <h2 className="mt-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            It starts with a line: {book[0]?.first_sentence && book[0]?.first_sentence[0]}
          </h2>  
          <div className='h-20 flex items-center justify-center text-center align-middle  '>
            {isInBookShelf ? (
              <button
                onClick={() => handleRemove()}
                className="bg-red-500 flex items-center text-center   justify-center hover:bg-red-700 h-8 w-28 font-bold rounded-xl"
              >
                <FaX /> Remove
              </button>
            ) : (
              <button
                onClick={() => handleAdd()}
                className="bg-cyan-500 flex items-center text-center   justify-center hover:bg-cyan-700 h-8 w-32 font-bold rounded-xl"
              >
                <FaPlus /> Bookshelf
              </button>
            )}
          </div>
        </div>
      </div>

    </div>
    
  );
}

export default BookDetails;
