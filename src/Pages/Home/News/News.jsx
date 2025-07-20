import React from 'react';
import New from './New';

const News = () => {
    const info = [
        {
            img: 'https://i.ibb.co/4wXx67MY/01.png',
            name: 'Lorum Ipsum is Dumy text which you can see ',
            dic: ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC '
        },
        {
            img: 'https://i.ibb.co/60FfNHLc/Rectangle-34.png',
            name: 'Lorum Ipsum is Dumy text which you can see ',
            dic: ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC '
        },

        {
            img: 'https://i.ibb.co/fzVr5Bmd/Rectangle-35.png',
            name: 'Lorum Ipsum is Dumy text which you can see ',
            dic: ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC '
        }
    ]
    return (
        <div>
            <div className='w-2/4 text-center mx-auto my-10'>
                <div>
                    <h1 className='text-6xl font-black'>News & Events</h1>
                    <p className='text-xl font-semibold'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,  </p>
                </div>
            </div>
            <div className='px-4 md:px-20 mt-5 md:mt-30 md:mb-20'>

                <div className='gird grid-cols-1 md:grid md:grid-cols-3 gap-5'>
                    {
                        info.map((dataInfo, index) => <New key={index} data={dataInfo}></New>)
                    }
                </div>
            </div>
        </div>
    );
};

export default News;