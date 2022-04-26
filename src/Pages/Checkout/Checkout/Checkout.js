import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useServiceId from '../../../CustomHook/serviceId';
import auth from '../../../firebase.init';
import './Checkout.css'

const Checkout = () => {
    const [user] = useAuthState(auth);
    const {serviceId} = useParams()
    const [service] = useServiceId(serviceId);
    const handleCheckout = event => {
         event.preventDefault();
         const order = {
             name : user.displayName, 
             email : user.email,
             serviceId : serviceId,
             address : event.target.address.value,
             phone : event.target.phone.value,
         }
        //  
        axios.post('http://localhost:5000/order', order)
          .then(function (response) {
            const {data} = response;
            if(data.insertedId){
                toast('Your order is confirmed successfully, Have a cup of Coffee.');
                event.target.reset();
            }
          })
 
    } 
        

    return (
        <div className='checkout-form w-50 mx-auto'>
            <h2>Please fill the form and confirm your booking {service.name}</h2>
            <form className='w-75 mx-auto' onSubmit={handleCheckout}>
                <input type="text" name="name" value={user?.displayName} readOnly   />
                <input type="text" name="email" value={user?.email} readOnly  />
                <input type="text" name="service" value={service.name} readOnly  />
                <input type="text" name="address" autoComplete='off' placeholder='Address'/>
                <input type="text" name="phone" placeholder='Phone'/>
                <input type="submit" value="Confirm Order" />           
            </form>
        </div>
    );
};

export default Checkout;