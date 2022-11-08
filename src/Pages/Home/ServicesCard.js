import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {title , ratting , price , body , img} = service;
    return (
        <div className='mt-16'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-72' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{body.slice(0 , 100) + "...." }<Link>read more</Link> </p>
                   <h3 className='text-1xl font-bold'>Price : {price}</h3>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;