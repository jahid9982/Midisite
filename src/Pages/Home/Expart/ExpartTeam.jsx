import React from 'react';
import Expart from './Expart';

const ExpartTeam = () => {
    const info = [
        {
            img: 'https://i.ibb.co/SDMXNRGw/pic3-1.png',
            name: 'Patrik Cortez',
            dic: ' Doctor'
        },
        {
            img: 'https://i.ibb.co/N4jT763/pic4-1-1.png',
            name: 'Patrik Cortez',
            dic: ' Doctor'
        },

        {
            img: 'https://i.ibb.co/pNBFc6G/pic5-1.png',
            name: 'Patrik Corte',
            dic: ' Doctor'
        },
        {
            img: 'https://i.ibb.co/XxhPYMfz/pic6-1.png',
            name: 'Patrik Corte',
            dic: ' Doctor'
        }
    ]
    return (
        <div>
            <div className='w-2/4 text-center mx-auto my-20'>
                <div>
                    <h1 className='text-6xl font-black'>Our Expert Team</h1>
                    <p className='text-xl font-semibold'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, </p>
                </div>
            </div>
            <div className='px-4 md:px-20 mt-5 md:mt-30 md:mb-20'>

                <div className='gird grid-cols-1 md:grid md:grid-cols-4 gap-5'>
                    {
                        info.map(dataInfo => <Expart key={dataInfo.name} data={dataInfo}></Expart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ExpartTeam;