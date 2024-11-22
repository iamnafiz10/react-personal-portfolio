import React from 'react';
import './footer.scss';
import {Typography} from "@material-tailwind/react";
import {AiFillFacebook, AiFillLinkedin, AiFillInstagram} from "react-icons/ai";

function Footer(props) {
    return (
        <>
            <section id="footer-section" className="bg-[#ededed]">
                <div className="container mt-20">
                    <footer
                        className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
                        <Typography color="blue-gray" className="font-poppins font-[400]">
                            &copy; Copyright 2025. All rights are reserved.
                        </Typography>
                        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                            <li>
                                <a target="_blank" href="https://www.facebook.com/iamnafiz10" className="text-2xl hover:text-primary" rel="noreferrer">
                                    <AiFillFacebook/>
                                </a>
                            </li>

                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/iamnafiz10/" className="text-2xl hover:text-primary" rel="noreferrer">
                                    <AiFillLinkedin/>
                                </a>
                            </li>

                            <li>
                                <a target="_blank" href="https://www.instagram.com/iamnafiz10/" className="text-2xl hover:text-primary" rel="noreferrer">
                                    <AiFillInstagram/>
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </section>
        </>
    );
}

export default Footer;