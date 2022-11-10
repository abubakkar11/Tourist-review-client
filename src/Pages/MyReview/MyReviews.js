import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvoder/AuthProvider';
import useTitle from '../../useTitle/useTitle';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    useTitle('My-Review')
    const [myReviews, setMyReviews] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])
    const handleDelete = (id) => {
        const process = window.confirm('Are you sure')
        if (process) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Delete Successfull')
                        const remainReview = myReviews.filter(review => review._id !== id)
                        setMyReviews(remainReview)
                    }
                })
                .catch(err => console.error(err))
        }
    }
    return (
        
        <div>
            {myReviews.length === 0 ? 
            <>
            <p className='mt-5 text-center text-3xl text-orange-500 font-semibold'>No Review Please add review</p>
            </>
                :
                <>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                        {
                            myReviews.map(myReview => <MyReviewCard
                                key={myReview._id}
                                myReview={myReview}
                                handleDelete={handleDelete}
                            ></MyReviewCard>)
                        }
                    </div>
                </>
            }

        </div>
    );
};

export default MyReviews;