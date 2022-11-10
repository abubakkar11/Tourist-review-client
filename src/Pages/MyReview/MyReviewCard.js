import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCard = ({myReview , handleDelete}) => {
    const { name, img, email, _id , message, retting, serviceName } = myReview;
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <div className='flex justify-center items-center'>
                <img src={img} alt="Shoes" className=" bg-neutral-focus text-neutral-content rounded-full w-16" />
                <div className='ml-3'>
                <p>{name}</p>
                <p>{email}</p>
                </div>
            </div>
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{serviceName}</h2>
            <p>Retting : {retting}</p>
           <div>
             <p><span className='font-semibold'>About This Guide</span> : {message}</p>
            <div className='flex justify-around mt-3'>
            <button onClick={() =>handleDelete(_id)} className="btn mr-10 btn-warning">Delete</button> 
            <Link to={`/updateReview/${_id}`}><button  className="btn  btn-warning">Update</button> </Link>
            </div>
           </div>
        </div>
    </div>
    );
};

export default MyReviewCard;