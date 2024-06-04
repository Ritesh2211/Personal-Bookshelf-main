import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from "../common/Loading";
import { fetchAuthorDetail, fetchAuthorWorkDetail} from "../../redux/book/action";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const AuthorDetails=()=> {
  const {authorKey} = useParams();

  const { loading, error, author, authorWorks } = useSelector(
    (state) => state.books
  );

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAuthorDetail(authorKey));
    dispatch(fetchAuthorWorkDetail(authorKey));
  },[authorKey])
  return (
    <div className='relative flex items-center justify-center w-full my-5 '>
        {error && (
          <p className="bg-gray-700 text-red-500 font-semibold text-center ">
            Some Error occured: {error}
          </p>
        )}
      <div className="flex w-[50rem] h-auto rounded-xl bg-neutral-950 bg-clip-border text-gray-700 shadow-md ">
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-cyan-500 antialiased">
            Author Details
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-slate-300 antialiased">
            {author?.name}
          </h4> 
          <h2 className="mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {author?.fuller_name}
          </h2>
          <h2 className="mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {author?.bio?.value}
          </h2>
          <h2 className="mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {author?.birth_date && author?.birth_date} - {author?.death_date ? author.death_date : "alive"}
          </h2>
          <h2 className="mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Works : {authorWorks?.size}
          </h2>
          <h2 className="mt-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Showing some works by author: 
            { authorWorks?.entries && Array.from(authorWorks?.entries).slice(0, 5).map(entry => <h1>{entry.title}</h1>)}
          </h2> 
        
        </div>
      </div>

    </div>
    
  )
}

export default AuthorDetails