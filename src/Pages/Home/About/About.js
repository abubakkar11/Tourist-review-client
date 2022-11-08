import React from 'react';
import parsonImage from '../../../Images/about/tour-guide-job-description-6000x4000-20201119.jpeg'

const About = () => {
    return (
        <div>
            <div id='#about' className="mt-20">
            <h1 className='mb-12 ml-5 text-3xl text-orange-600 font-semibold'>About me</h1>
            <div className="hero-content lg:flex justify-around  max-auto">
              <img src={parsonImage} alt='' className="max-w-sm rounded-lg shadow-2xl mr-28" />
              <div className=''>
                <h1 className="text-5xl font-bold">Sogui W.</h1>
                <p className="py-6">Hi dear travelers, Grant me just a few hours to show you
                 the hidden wonders of such a so culturally rich country called.</p>
                 <p>My name is Sogui , 
                 a really very African name which is still echoing around the world, because of my proficiencies, 
                 my honesty and my legendary smile. If you're looking for a gifted and knowledgeable English and 
                 Spanish speaking tour guide, I'm the right choice. I'm not saying that, just to speak highly of myself,
                  but these are the testimonies of the people I've already toured in Senegal and the Gambia.</p>
                
              </div>
            </div>
          </div>
        </div>
    );
};

export default About;