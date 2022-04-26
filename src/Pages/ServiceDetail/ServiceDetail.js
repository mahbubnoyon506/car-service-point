import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceId from '../../CustomHook/serviceId';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceId(serviceId);
    
    return (
        <div>
            <h2>Welcome to detail: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;