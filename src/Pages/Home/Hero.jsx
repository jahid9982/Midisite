import React from 'react';
import bg from '../../assets/image/bg imag.png'
import img from '../../assets/image/shadwo.png'
import imge from '../../assets/image/Doctor illustration 1.png'
const Hero = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat'

        }}>

            <div className='px-4 md:px-20 md:min-h-screen  md:flex justify-between  items-center '>
                <div className='w-1/1 md:w-2/3 ' >
                    <div>
                        <h1 className='pt-5 text-2xl md:text-6xl font-black text-white'>A Wealth of Experience To
                            Heal And Help You.</h1>
                        <p className=' text-xl text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since
                            the 1500s.</p>
                        <button className='bg-white p-4 mr-5 mt-5 font-black text-2xl'>See More</button>
                        <button className='bg-white p-4 mt-5 font-black text-2xl'>Make an Appointment</button>
                    </div>
                </div>
                <div className='w-1/1 md:w-1/3 mt-10'>
                    <div className='md:flex md:justify-end  '>
                        <div className='w-[250px] h-[500px] bg-base-200 shadow-2xl rounded-2xl flex items-center justify-center '>
                            <div className='relative '>
                                <img src={img} alt="" />
                                <div className='absolute top-13 space-y-13'>
                                    <img src={imge} alt="" />
                                    <h1 className='text-4xl font-black text-white text-center'> LORUM IPSUM</h1>
                                    <div className='flex justify-center font-black '><button className='btn btn-primary'>Register Now</button></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;