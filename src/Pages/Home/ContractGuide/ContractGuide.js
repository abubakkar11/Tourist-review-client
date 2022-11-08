import React from 'react';
import { FaFacebook ,FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ContractGuide = () => {
    return (
        <div className='text-center  mt-20'>
            <h1 className='text-orange-500 text-4xl font-semibold'>CONTACT THIS GUIDE</h1>
            <p className='py-4'>Questions about the tour? Not seeing exactly what you’re looking for? Contact this <br />
                 guide with questions, or to create a custom itinerary for you and your travel <br />
                 companions.</p>
                 <div className='flex justify-center items-center'>
                 <button className="btn btn-primary mr-3">
                    Send message 
                 </button>
                 <a href='https://www.facebook.com/sk.abubakkar.3760430'><FaFacebook className='text-3xl mr-2'/></a>
                  <a href="https://twitter.com/Abubakkar3664"><FaTwitter className='text-3xl'/></a>
                 </div>
                
        </div>

    );
};

export default ContractGuide;