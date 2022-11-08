import React from 'react';
import { Link } from 'react-router-dom';

const AllServiceCard = ({ service }) => {
    const { title, retting
        , price, body, img , _id} = service;
    return (
        <div className='mt-16'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-72' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{body.slice(0, 100) + "...."}<Link className='text-blue-500'>read more</Link> </p>
                    <div className='flex justify-between'>
                    <h3 className='text-1xl font-bold'>Price : {price}</h3>
                    <h3 className='text-1xl font-bold'>  {retting}</h3>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCard;