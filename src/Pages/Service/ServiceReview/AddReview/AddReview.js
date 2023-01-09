import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../AuthProvoder/AuthProvider';

const AddReview = ({ service }) => {
    const { title, _id } = service;
    const { user } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const retting = form.retting.value;
        if(retting > 5){
            toast.error('You cannot review out of 5')
            return
        }
        const message = form.message.value;
        console.log(name, email, retting, message)

        const reviewDetails = {
            reviewId : _id,
            serviceName: title,
            img: user?.photoURL,
            name: name,
            email: email,
            message: message,
            retting: retting,
        }
        fetch("https://assesment-11-server.vercel.app/reviews",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewDetails)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                  toast.success('Review Sent ')
                  form.reset()
                }
            })
            
    }
    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-semibold mb-5'>Your Review</h1>
            <div >
                <form onSubmit={handleSubmit}>
                    <div className='grid lg:grid-cols-2 gap-10'>
                        <input type="text" placeholder="First Name" name='name' defaultValue={user?.displayName} className="input input-bordered input-secondary w-full " />
                        <input type="text" placeholder="Retting Out of 5" name='retting' className="input input-bordered input-secondary w-full " />
                        <input type="text" placeholder="Email" name='email' defaultValue={user?.email } className="input input-bordered input-secondary w-full "  />
                    </div>
                    <textarea name='message' className="textarea textarea-success w-full mt-5" placeholder="Message"></textarea>
                    <input type="submit" className="btn btn-primary" value="Send Review" />
                </form>
            </div>
            <div className='mt-10 font-medium text-orange-500'>
            <h1 className='text-4xl '>Tourist Review</h1>
            </div>
        </div>
    );
};

export default AddReview;