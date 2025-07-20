
import bg from '../../assets/image/genfloor-summary-image_.webp'

import { DayPicker } from 'react-day-picker';
const Servicess = ({ selected, setSelected }) => {


    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundBlendMode: 'multiply',
            backgroundColor: '#00000075'

        }}>

            <div className='px-4 md:px-20 md:min-h-screen  md:flex justify-between  items-center '>
                <div className='w-1/1 md:w-2/3 px-20' >
                    <div>
                        <h1 className='pt-5 text-2xl md:text-6xl font-black text-white'>A Wealth of Experience To
                            Heal And Help You.</h1>
                        <p className=' text-xl text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since
                            the 1500s.</p>
                        <button className='bg-white p-4 mt-5 font-black text-2xl'> Take an Appointment</button>
                    </div>
                </div>
                <div className='w-1/1 md:w-1/3 mt-10 text-white flex justify-center'>
                    <div className='shadow-2xl p-5'>
                        <DayPicker
                            animate
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}

                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Servicess;