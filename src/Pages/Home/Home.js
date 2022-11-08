import React from 'react';
import Image1 from '../../Images/bannar/image2.webp'
import Image2 from '../../Images/bannar/images1.jpg'
import Image3 from '../../Images/bannar/images4.jpeg'
import Banner from './Banner';


const Home = () => {
  const bannerDetails = [
    {
      img : Image1,
      pre : 3,
      id : 1,
      next : 2
    },
    {
      img : Image2,
      pre : 2,
      id : 2,
      next : 3
    },
    {
      img : Image3,
      pre : 2,
      id : 3,
      next : 1,
    },
  ]
    return (
        <div>
           <div style={{height:'600px'}} className="carousel rounded-md">
          {
            bannerDetails.map(banner => <Banner
            key={banner.id}
            banner={banner}
            ></Banner>)
          }
          </div>
        </div>
    );
};

export default Home;