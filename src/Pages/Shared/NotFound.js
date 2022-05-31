import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div style={{marginTop:"100px"}} className='mt-5 text-center'>
            <h1 className='text-red-600 mt-5 mb-2 text-4xl font-[500]'>404 Not Found</h1>
            <button className='btn  px-5 py-3 text-white' onClick={()=> navigate("/")}>Go to Home</button>
        </div>
    );
};

export default NotFound;