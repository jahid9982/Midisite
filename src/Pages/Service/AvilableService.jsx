import React, { useEffect, useState } from 'react';
import InfoService from './InfoService';
import BookingModal from './BookingModal';
import { format } from 'date-fns';

const AvilableService = ({ selected }) => {
    const [service, setService] = useState([])
    const [options, setOptions] = useState({})
    const date = format(selected, "PP")
    console.log(service);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <div className='text-center my-20'>
                <div>
                    <h1 className='text-2xl font-black text-primary'>
                        Avilable Date: <span>{
                            date
                        }</span></h1>
                    <h1>Select Your Service</h1>
                </div>
                <div className='px-4 md:px-20'>
                    <div className=' gird grid-cols-1 md:grid md:grid-cols-3 gap-5'>
                        {
                            service.map(dataInfo => <InfoService key={dataInfo._id} data={dataInfo} setOptions={setOptions}></InfoService>)
                        }
                    </div>
                </div>
                {
                    options && <BookingModal options={options} setOptions={setOptions} date={date}></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvilableService;