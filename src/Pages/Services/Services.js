import React from 'react';
import {useLoaderData,  } from 'react-router-dom';
import useTitle from '../../useTitle/useTitle';
import AllServiceCard from './AllServiceCard';

const Services = () => {
  useTitle('Services')
    const services = useLoaderData();
    console.log(services)
    return (
      <div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2'>
            {
                services.map(service => <AllServiceCard
                key={service._id}
                service={service}
                ></AllServiceCard>)
            }
        </div>
    
      </div>
    );
};

export default Services;
