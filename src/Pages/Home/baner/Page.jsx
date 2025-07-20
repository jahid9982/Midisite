import React from 'react';
import SinglePage from './SinglePage';

const Page = () => {
    const info = [
        {
            img: 'https://i.ibb.co/277ks4mf/24-Hours-service-1.png',
            name: '24 Hours service ',
            dic: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been '
        },
        {
            img: 'https://i.ibb.co/cXhg181g/Qualified-Doctor-1.png',
            name: 'Qualified Doctor ',
            dic: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been '
        },
        {
            img: 'https://i.ibb.co/Tqp6fvRs/Emergency-Care-1.png',
            name: 'Emergency Care ',
            dic: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been '
        },
        {
            img: 'https://i.ibb.co/Ng2JQVbm/operating-room.png',
            name: 'operating-room ',
            dic: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been '
        }
    ]
    return (
        <div className='px-4 md:px-20  md:mt-30 md:mb-20 '>
            <div className='gird grid-cols-1 md:grid md:grid-cols-4 gap-5'>
                {
                    info.map(dataInfo => <SinglePage key={dataInfo.name} data={dataInfo}></SinglePage>)
                }
            </div>
        </div>
    );
};

export default Page;