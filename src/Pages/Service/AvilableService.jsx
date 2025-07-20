import React, { useEffect, useState } from 'react';
import InfoService from './InfoService';

const AvilableService = ({ selected }) => {
    const [service, setService] = useState([])
    console.log(service);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <div className='text-center my-20'>
                <h1 className='text-2xl font-black text-primary'>Appointment Date : <span>{
                    selected ? `Selected: ${selected.toLocaleDateString()}` : "Please select a Time."
                }</span></h1>
                <h1>Select Your Date</h1>
                <div className='px-4 md:px-20'>
                    <div className=' gird grid-cols-1 md:grid md:grid-cols-3 gap-5'>
                        {
                            service.map(dataInfo => <InfoService key={dataInfo._id} data={dataInfo}></InfoService>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvilableService;