import React, { useEffect, useState } from 'react';
import Image1 from '../../Images/bannar/image2.webp'
import Image2 from '../../Images/bannar/images1.jpg'
import Image3 from '../../Images/bannar/images4.jpeg'
import Image4 from '../../Images/bannar/images3.jpg'
import Banner from './Banner';
import ServicesCard from './ServicesCard';
import About from './About/About';
import ContractGuide from './ContractGuide/ContractGuide';
import { Link } from 'react-router-dom';
import useTitle from '../../useTitle/useTitle';


const Home = () => {
  const [services, setServices] = useState([])
  useTitle('Home')
  useEffect(() => {
    fetch('https://assesment-11-server.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  const bannerDetails = [
    {
      img: Image1,
      pre: 4,
      id: 1,
      next: 2
    },
    {
      img: Image2,
      pre: 2,
      id: 2,
      next: 3
    },
    {
      img: Image3,
      pre: 3,
      id: 3,
      next: 4,
    },
    {
      img: Image4,
      pre: 3,
      id: 4,
      next: 1,
    },
    // {
    //   img: Image4,
    //   pre: 3,
    //   id: 4,
    //   next: 1,
    // },
  ]
  return (
    <div>

      <div style={{ height: '600px' }} className="carousel rounded-md">
        {
          bannerDetails.map(banner => <Banner
            key={banner.id}
            banner={banner}
          ></Banner>)
        }
      </div>
      <div className='grid lg:grid-cols-3 md:col-span-2 '>
        {
          services.map(service => <ServicesCard
            key={service._id}
            service={service}
          ></ServicesCard>)
        }
        <div className='mt-10'>
          <Link to={'/services'}><button className="btn btn-primary">See all</button></Link>
        </div>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <ContractGuide></ContractGuide>
      </div>
    </div>
  );
};

export default Home;