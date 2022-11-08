import React from 'react';
import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong , faLeftLong } from '@fortawesome/free-solid-svg-icons'

const Banner = ({banner}) => {
    const {img , pre , id , next} = banner
    return (
       
        <div id={`slide${id}`} className="carousel-item relative w-full">
               <div className='imageGradint'>
               <img src={img} alt='' style={{height:'600px', width:'1280px'}} className="" />
               </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-1/2">
                    <a href={`#slide${pre}`} className="btn btn-circle mr-5"><FontAwesomeIcon icon={faRightLong} /></a>
                    <a href={`#slide${next}`} className="btn btn-circle"><FontAwesomeIcon icon={faLeftLong} /></a>
                </div>
                <div className="absolute ml-5 flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <h1 className='text-6xl text-white font-bold'>
                        Affordable <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute w-96 ml-5 flex justify-start transform -translate-y-1/2 left-5 right-5 top-2/4">
                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute w-96 ml-5 flex justify-start transform -translate-y-1/2 left-5 right-5 top-3/4">
                <button className="btn btn-warning mr-5 rounded-lg	">About me</button>

                </div>
            </div>
    );
};

export default Banner;