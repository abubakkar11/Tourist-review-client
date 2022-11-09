import React, { useContext } from 'react';
import { Link, useLoaderData,  } from 'react-router-dom';
import { AuthContext } from '../../AuthProvoder/AuthProvider';
import ServiceReview from '../Service/ServiceReview/ServiceReview';
import AllServiceCard from './AllServiceCard';

const Services = () => {
    const {user} = useContext(AuthContext)
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
