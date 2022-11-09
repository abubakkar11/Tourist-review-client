import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvoder/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {
                myReviews.map(myReview => <MyReviewCard
                key={myReview._id}
                myReview={myReview}
                ></MyReviewCard>)
            }
        </div>
    );
};

export default MyReviews;