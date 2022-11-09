import React from 'react';

const MyReviewCard = ({myReview}) => {
    const { name, img, email, message, retting, serviceName } = myReview
    
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
            <p><span className='font-semibold'>About This Guide</span> : {message}</p>
        </div>
    </div>
    );
};

export default MyReviewCard;