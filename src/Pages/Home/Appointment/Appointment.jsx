import React from 'react';

const Appointment = ({ button, title }) => {
    return (
        <div className='px-4 md:px-20 my-28'>
            <div className='text-center bg-[#C7F2FF]'>
                <h1 className='text-3xl font-medium py-7'>{title}</h1>
            </div>
            <div>
                <form>
                    <div className='grid grid-cols-2 gap-15 my-15'>
                        <div className='space-y-5'>
                            <input type="text" placeholder="Full Name" className="input w-full h-13" />
                            <input type="text" placeholder="Phone Number" className="input w-full h-13" />
                            <input type="text" placeholder="Additional Information" className="input w-full h-13" />

                        </div>
                        <div className='space-y-5' >
                            <input type="text" placeholder="Email" className="input w-full h-13" />
                            <input type="text" placeholder="Department" className="input w-full h-13" />
                            <input type="text" placeholder="Date and Time" className="input w-full h-13" />

                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='bg-primary p-4 rounded-xl '>{button}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appointment;