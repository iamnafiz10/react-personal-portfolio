import React, {useState} from 'react';
import './header.scss';
import {Link} from 'react-scroll';
import {Button} from "@material-tailwind/react";
import {RiMenu3Line, RiCloseFill} from "react-icons/ri";
import {AiOutlineContacts} from "react-icons/ai";

function Header(props) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="bg-white shadow-md sticky top-0 left-0 z-50">
                <div className="container lg:flex items-center justify-between py-5">
                    <div className="logo">
                        <Link to='hero-section' smooth={true} duration={500} spy={true} offset={-160}
                              className="cursor-pointer">
                            <h2 className="text-3xl font-jost text-secondary font-semibold">
                                <span className="text-primary">Roshan</span>
                                NaFiz
                            </h2>
                        </Link>
                    </div>

                    <div className="nav-item">
                        {/* Mobile Menu Icon */}
                        <div className="icons lg:hidden">
                            <span onClick={() => setOpen(!open)}
                                  className="text-2xl absolute right-8 top-6 cursor-pointer">
                                {
                                    open ? <RiCloseFill/> : <RiMenu3Line/>
                                }
                            </span>
                        </div>
                        {/* Mobile Menu Icon End */}
                        <ul className={`lg:flex lg:items-center absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ${open ? 'top-20 opacity-100' : 'top-[-490px]'} lg:opacity-100 opacity-0`}>
                            <li className="lg:ml-8 lg:my-0 my-7 text-[17px] font-[500]">
                                <Link to='hero-section' smooth={true} duration={500} spy={true} offset={-160}
                                      className="text-gray-800 hover:text-primary cursor-pointer">
                                    Home
                                </Link>
                            </li>

                            <li className="lg:ml-8 lg:my-0 my-7 text-[17px] font-[500]">
                                <Link to='about-section' smooth={true} duration={500} spy={true} offset={-50}
                                      activeClass="active"
                                      className="text-gray-800 hover:text-primary cursor-pointer">About</Link>
                            </li>

                            <li className="lg:ml-8 lg:my-0 my-7 text-[17px] font-[500]">
                                <Link to='service-section' smooth={true} duration={500} spy={true} offset={-50}
                                      activeClass="active"
                                      className="text-gray-800 hover:text-primary cursor-pointer">Services</Link>
                            </li>

                            <li className="lg:ml-8 lg:my-0 my-7 text-[17px] font-[500]">
                                <Link to='portfolio-section' smooth={true} duration={500} spy={true} offset={-50}
                                      activeClass="active"
                                      className="text-gray-800 hover:text-primary cursor-pointer">Portfolio</Link>
                            </li>

                            <li className="lg:ml-8 lg:my-0 my-7 text-[17px] font-[500]">
                                <Link to='testimonial-section' smooth={true} duration={500} spy={true} offset={-50}
                                      activeClass="active"
                                      className="text-gray-800 hover:text-primary cursor-pointer">Testimonials</Link>
                            </li>

                            <li className="lg:ml-8 lg:my-0 my-7">
                                <Link to='contact-section' smooth={true} duration={500} spy={true} offset={-50}>
                                    <Button size="md"
                                            className="capitalize font-normal bg-secondary font-poppins uppercase text-[14px] flex items-center gap-3 rounded-bl-2xl rounded-br-sm rounded-tr-2xl rounded-tl-sm">
                                        Contact US
                                        <AiOutlineContacts strokeWidth={2} className="h-5 w-5"/>
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Header;