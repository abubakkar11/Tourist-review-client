import React, { useContext } from 'react';
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
        const addService = {
            title: serviceName,
            body: message,
            retting: retting,
            price: price,
            img: photoURL
        }
        console.log(addService)
    }
    return (
        <div className='mt-10'>
            <p className='mt-5'>Add Service</p>
            <form onSubmit={handleAddService}>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10'>
                    <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered input-accent w-full" />
                    <input type="text" name='serviceName' placeholder="Service Name" className="input input-bordered input-accent w-full " />
                    <input type="text" name='price' placeholder="Price" className="input input-bordered input-accent w-full" />
                    <input type="text" name='retting' placeholder="Retting" className="input input-bordered input-accent w-full " />
                </div>
                <textarea name='message' className="textarea textarea-accent w-full mt-5" placeholder="Message"></textarea>
                <button className="btn btn-warning">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;