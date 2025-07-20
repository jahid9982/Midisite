import React from 'react';

const New = ({ data }) => {
    const { name, dic, img } = data
    return (
        <div>
            <div className=" bg-base-100  shadow-lg  ">
                <figure className=" ">
                    <div>
                        <div className='  flex justify-center items-center py-5'>
                            <img className='h-[165] w-full'
                                src={img} />
                        </div>
                    </div>
                </figure>
                <div className="">
                    <div className='flex justify-between items-center gap-5 px-5' >
                        <div className='flex justify-center items-center  gap-2'>
                            <img className='h-4 w-4' src="https://i.ibb.co/JRR64tJJ/Group.png" alt="" />
                            <h1>10  sep, 2021</h1>
                        </div>
                        <div className='flex justify-center items-center  gap-2'>
                            <img className='h-4 w-4' src="https://i.ibb.co/spHZnLRX/comments-icon.png" alt="" />
                            <h1>3  comments</h1>
                        </div>
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <p>{dic}</p>



                </div>
            </div>
        </div>
    );
};

export default New;