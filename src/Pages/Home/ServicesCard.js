import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({ service }) => {
    const { title, retting, price, body, img , _id} = service;
    return (
        <div className='mt-16'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><PhotoProvider>
                    <PhotoView src={img}>
                        <img className='w-full h-72' src={img} alt="" />
                    </PhotoView>
                </PhotoProvider></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{body.slice(0, 100) + "...."}<Link>read more</Link> </p>
                    <div className='flex justify-between'>
                        <h3 className='text-1xl font-bold'>Price : {price} per tour</h3>
                        <h3 className='text-1xl font-bold'>  {retting}</h3>
                    </div>
                    <div className="card-actions justify-end">
                       <Link to={`/service/${_id}`}> <button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;