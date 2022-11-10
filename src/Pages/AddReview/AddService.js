import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvoder/AuthProvider';
import useTitle from '../../useTitle/useTitle';

const AddService = () => {
    const { user } = useContext(AuthContext)
    useTitle('Add Service')
    const handleAddService = event => {
        event.preventDefault()
        const form = event.target;
        const photoURL = form.photoURL.value;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const retting = form.retting.value;
        const message = form.message.value;
        if(retting > 5){
            toast.error('You cannot review out of 5')
            return
        }
        const addService = {
            title: serviceName,
            body: message,
            retting: retting,
            price: price,
            img: photoURL
        }
        fetch("http://localhost:5000/all-services",
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
              toast.success('Service add Seccesfull')
              form.reset()
            }
        })
        
        console.log(addService)
    }
    console.log(typeof( retting ))
    return (
        <div className='mt-10'>
            <p className='mt-5'>Add Service</p>
            <form onSubmit={handleAddService}>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10'>
                    <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered input-accent w-full" required/>
                    <input type="text" name='serviceName' placeholder="Service Name" className="input input-bordered input-accent w-full " required/>
                    <input type="text" name='price' placeholder="Price" className="input input-bordered input-accent w-full" required/>
                    <input type="text" name='retting' placeholder="Retting" className="input input-bordered input-accent w-full " required/>
                </div>
                <textarea name='message' className="textarea textarea-accent w-full mt-5" placeholder="Message"required></textarea>
                <button className="btn btn-warning">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;