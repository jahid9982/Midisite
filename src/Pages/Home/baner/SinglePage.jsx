import React from 'react';

const SinglePage = ({ data }) => {
    const { name, dic, img } = data
    return (
        <div>
            <div className="card bg-base-100 mt-40 shadow-lg py-10 hover:bg-amber-200 transition-colors duration-1000 ;">
                <figure className="px-10 ">
                    <div>
                        <div className='bg-[#F3FCFF] h-17 w-17 rounded-full flex justify-center items-center'>
                            <img
                                src={img} />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{dic}</p>

                </div>
            </div>
        </div>
    );
};

export default SinglePage;