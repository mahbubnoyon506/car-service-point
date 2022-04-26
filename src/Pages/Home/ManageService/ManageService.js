import React from 'react';
import useServices from '../../../CustomHook/Hook';


const ManageService = () => {
    const [services, setServices] = useServices();
    const handleRemove = id => {
        const agree = window.confirm('Are you sure to remove it?');
        if(agree){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log('data deleted');
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
            console.log('Success')
        }
    }
    return (
        <div>
            {
                services.map(service => 
                <div className='d-flex justify-content-center align-items-between' key={service._id}>
                    <img style={{width: "100px"}} className='img-fluid' src={service.img} alt="" />
                    <h3>{service.name}</h3>
                    <button onClick={() => handleRemove(service._id)}>Remove</button>
                </div>)
            }
        </div>
    );
};

export default ManageService;