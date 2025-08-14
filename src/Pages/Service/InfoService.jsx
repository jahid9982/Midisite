import React from 'react';

const InfoService = ({ data, setOptions }) => {
    const { slots, name, _id } = data
    return (
        <div>
            <div className="card bg-base-100 mt-10 shadow-lg py-10 hover:bg-amber-200 transition-colors duration-1000 ;">

                <div className="card-body items-center text-center text-primary">
                    <h2 className="card-title">{name}</h2>
                    <p>Avilable  {slots.length > 1 ? 'Slots' : 'Slot'} {slots.length}</p>
                    <p>{slots[0]}</p>
                    <label onClick={() => setOptions(data)} htmlFor="booking_modal" className='btn bg-primary w-full p-3 mx-10 mt-10 rounded-2xl text-white'>Select  Time</label>




                </div>
            </div>
        </div>

    );
};

export default InfoService;