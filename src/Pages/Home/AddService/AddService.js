import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
       const url = `http://localhost:5000/service`;
       fetch( url, {
           method : 'POST',
           headers : {
               'content-type' : 'application/json'
           },
           body: JSON.stringify( data)
       })
       .then(res => res.json())
       .then(result => {
           console.log(result);
       })
    };
    return (
        <div className='w-50 mx-auto my-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 p-2 d-block w-100' placeholder='Name'  {...register("name", { required: true })} />
                <input className='mb-2 p-2 d-block w-100' placeholder='Price'  {...register("price", { required: true })} />
                <input className='mb-2 p-2 d-block w-100' placeholder='PhotoId'  {...register("img")} />
                <textarea className='mb-2 p-2 d-block w-100' placeholder='Description'  {...register("description", { required: true })} />
                <input className='p-2 d-block w-100' type="submit" aria-label='Add Service' />
            </form>
        </div>
    );
};

export default AddService;