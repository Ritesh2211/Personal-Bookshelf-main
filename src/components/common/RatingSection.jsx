import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const RatingSection = ({ ratings_average, ratings_count, star5, star4, star3, star2, star1})=> {
  const stars = [star5, star4, star3, star2, star1];
  return (
    <div> 
      <h2 className="mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Rating : </h2>
      <div className='flex'>
        <Stack spacing={1}>
          <Rating name="half-rating-read" defaultValue={ratings_average} precision={0.5} readOnly />
        </Stack>
        <h2 className="block font-sans text-l leading-snug tracking-normal text-blue-gray-900 antialiased">
          {Math.round(ratings_average/0.5)*0.5} out of 5
        </h2>
      </div>
        
      {
        stars.map((star,index)=>{
          const rating_per = Math.round((star / ratings_count)*100)
          return( 
            <div className='flex' key={index}>
              <p className="mr-4 text-m text-blue-gray-500">{index+1} star</p>    
                <div className="bg-gray-200 rounded-full w-1/2 h-1.5 mt-3 dark:bg-gray-700 items-center">
                  <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{width: `${rating_per}%`}}></div>    
              </div>
              <p className="ml-4 text-mtext-blue-gray-500">{star}</p>
            </div>
            )
        })}
    </div>
  )
}

export default RatingSection