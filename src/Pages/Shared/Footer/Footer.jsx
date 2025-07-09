import { faArrowRight, faFax, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faVoicemail } from '@fortawesome/free-solid-svg-icons/faVoicemail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='mt-3'>
            <footer className="footer md:flex sm:footer-horizontal bg-primary text-white  px-4 md:p-29  shap">
                <aside className='w-1/4 space-y-5 pe-12 text-white pt-30 md:pt-0'>

                    <p className='text-4xl font-extrabold -ms-3 pt-50 md:pt-0 '>
                        Medisite
                    </p>
                    <p className='text-xl '>When Stan Britten established
                        BritKare in 1995, he did so with a true
                        desire to asist the medical
                        community with the quality care of
                        their desire</p>
                </aside>
                <nav className='w-1/4 '>
                    <h6 className="footer-title  text-2xl">  Links</h6>
                    <div className='flex items-center gap-3'>
                        <img className='h-1.5 w-1' src="https://i.ibb.co/MDK2SLfs/Vector-2.png" alt="" />
                        <a className="link link-hover text-xl"> Service Areas</a>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='h-1.5 w-1' src="https://i.ibb.co/MDK2SLfs/Vector-2.png" alt="" />
                        <a className="link link-hover text-xl"> Blogs</a>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='h-1.5 w-1' src="https://i.ibb.co/MDK2SLfs/Vector-2.png" alt="" />
                        <a className="link link-hover text-xl"> About</a>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='h-1.5 w-1' src="https://i.ibb.co/MDK2SLfs/Vector-2.png" alt="" />
                        <a className="link link-hover text-xl"> Contacts</a>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='h-1.5 w-1' src="https://i.ibb.co/MDK2SLfs/Vector-2.png" alt="" />
                        <a className="link link-hover text-xl"> Solutions</a>
                    </div>

                </nav>
                <nav className='w-1/4 '>
                    <h6 className="footer-title -ms-3 text-xl">Contact</h6>
                    <a className="link link-hover text-xl"> <FontAwesomeIcon icon={faLocation} /> 33 Street Saadi Town, near Malir cantt</a>
                    <a className="link link-hover text-xl"><FontAwesomeIcon icon={faPhone} />  +92 322 2155556</a>
                    <a className="link link-hover text-xl"><FontAwesomeIcon icon={faFax} />  +92 322 2155556</a>
                    <a className="link link-hover text-xl" > <FontAwesomeIcon icon={faVoicemail} />  myfk87@gmail.com</a>
                </nav>
                <div className='w-1/4 flex justify-end '>
                    <nav >
                        <h6 className="footer-title -ms-3 text-xl">Follow us on</h6>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='bg-white h-12 w-12 flex items-center justify-center rounded-full '>
                                <img className='h-[21px] w-[12px]' src="https://i.ibb.co/VcgRhwnB/Vector-1.png" alt="" />
                            </div>
                            <div className='bg-white h-12 w-12 flex items-center justify-center rounded-full '>
                                <img className='h-[21px] w-[12px]' src="https://i.ibb.co/67JqXvSK/Vector.png" alt="" />
                            </div>

                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;