import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ServiceReview from './ServiceReview/ServiceReview';
import useTitle from '../../useTitle/useTitle';

const Service = () => {
    useTitle('Service-Details')
    const service = useLoaderData()
    const { title, retting, price, body, img, } = service;
    return (
        <div>
             
            <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
                <figure> <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='w-full h-96' src={img} alt="" />
                    </PhotoView>
                </PhotoProvider></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title">{title}</h2>
                    <p>{body}</p>
                    <p className='text-1xl font-bold'>Price : {price} per tour</p>
                    <p className='text-1xl font-bold'>{retting} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Review</button>
                    </div>
                </div>
            </div>
            <div>
                <ServiceReview
                service={service}
                ></ServiceReview>
            </div>
        </div>
    );
};

export default Service;