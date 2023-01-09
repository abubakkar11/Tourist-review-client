import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvoder/AuthProvider';
import AddReview from './AddReview/AddReview';
import Review from './AddReview/Review';


const ServiceReview = ({ service }) => {
  const [reviews, setReviews] = useState([])
  const { user } = useContext(AuthContext)
  console.log(reviews)
  useEffect(() => {
    fetch(`https://assesment-11-server.vercel.app/reviews?reviewId=${service._id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [service._id])
  return (
    <div>
      {
        user?.uid ? <AddReview service={service}></AddReview>
          :
          <div className='flex ml-96 mt-16 items-center'>
            <h1 className='mr-10 text-3xl text-red-500'>Please Login First then Review</h1>
            <Link to={'/login'}><button className="btn btn-primary">Login</button></Link>
          </div>
      }
      {
        reviews.length === 0 ? <><p className='text-center text-3xl text-orange-500 opacity-50 py-5'>No review About This Service</p></> :
          user?.uid ? <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {
              reviews.map(review => <Review
                key={review._id}
                review={review}
              ></Review>)
            }
          </div>
            :
            <>
              ''
            </>

      }

    </div>
  );
};

export default ServiceReview;