import React from 'react';

const Advocate = () => {
    return (
        <div className='px-4 md:px-20 md:flex items-center justify-between gap-20 space-y-10 mt-5'>
            <div className=' md:w-2/3 '>
                <h1 className='text-4xl font-semibold'>Medicare Supplement <br />
                    Advocate</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                <button className='bg-primary p-4 text-xl font-semibold text-white rounded-2xl'>See More</button>
            </div>
            <div className='md:w-1/3 relative'>
                <div className=''>
                    <img className='h-[510px] w-[494px] ' src="https://i.ibb.co/LzJ27RzC/Rectangle.png" alt="" />
                </div>
                <img className='h-[387px] w-[368px] absolute top-15 right-15 costum-shaddow z-40 rounded-2xl' src="https://i.ibb.co/GvsNjCz7/Rectangle-12.png" alt="" />
            </div>
        </div>
    );
};

export default Advocate;