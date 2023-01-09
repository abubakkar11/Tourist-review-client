import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const review = useLoaderData()
    const [newReview , setNewReview] = useState(review)
    const handleSubmit = event =>{
        event.preventDefault()
        console.log(newReview)
        fetch(`https://assesment-11-server.vercel.app/reviews/${review._id}`,
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Review Updated')
                event.target.reset()
            }
        })
    
    }
    const handleUpdateBlur = (e) =>{
      const flied = e.target.name;
      const value = e.target.value;
      console.log(flied , value)
      const newUpdateReview = {...newReview}
      newUpdateReview[flied] = value;
      setNewReview(newUpdateReview)
    }
    return (
        <div className='mt-20'>
            <h1 className='text-center text-3xl  text-orange-500 font-semibold'>Update Your Review</h1>
           <div className='mt-10 '>
            <form onSubmit={handleSubmit} className='w-1/2 mx-auto'>
            <input type="text" onChange={handleUpdateBlur} name='message' placeholder="Review Text" defaultValue={review.message.slice(0 , 80) + '....'} className="input input-bordered mb-5 input-accent w-full " />
            <input type="text"  onChange={handleUpdateBlur} name='retting' placeholder="Retting" defaultValue={review.retting} className="input input-bordered input-accent w-full" />
            <button className="btn center ml-64 mt-5 btn-primary">Update Review</button>
            </form>
           </div>
        </div>
    );
};

export default UpdateReview;