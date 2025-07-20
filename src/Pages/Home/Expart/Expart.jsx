import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Expart = ({ data }) => {
    const { name, dic, img } = data
    return (
        <div>
            <div className=" bg-base-100  shadow-lg  ">
                <figure className=" ">
                    <div>
                        <div className='bg-[#E6F7FC]  flex justify-center items-center py-5'>
                            <img
                                src={img} />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{dic}</p>
                    <div className='flex gap-3 items-center justify-center text-2xl'>
                        <FaFacebookF />
                        <FaGooglePlusG className='text-3xl' />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>


                </div>
            </div>
        </div>
    );
};
export default Expart;