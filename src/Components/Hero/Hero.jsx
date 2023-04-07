import React from 'react';
import './hero.scss';
import {Button} from "@material-tailwind/react";

function Hero(props) {
    return (
        <>
            <section id="hero-section">
                <div className="container relative z-50 pt-20">
                    <div className="grid items-center justify-center">
                        <div className="block lg:hidden profile-image">
                            {/* Here Image Come From SCSS File */}
                        </div>
                    </div>

                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 mt-10 lg:mt-0 lg:col-span-7">
                            <div className="hero-content">
                                <div className="hero-text space-y-4">
                                    <h1 className="text-4xl md:text-5xl text-blue-gray-900 font-bold leading-[3rem] md:leading-[4rem]">
                                        Meet <span className="text-2xl text-secondary">A</span> Full-Stack
                                        Web<br/> Developer 👋
                                    </h1>
                                    <p className="text-md font-jost md:text-lg text-gray-700 flex items-center">
                                        Hi, I'm Roshan Nafiz. A passionate Full-Stack Web Developer<br/> based in
                                        Rajshahi, Bangladesh. 🙌
                                    </p>
                                </div>
                                <div className="contact-buttons pt-10">
                                    <Button
                                        className="py-3 px-10 font-jost capitalize font-poppins font-normal text-[16px] rounded-bl-sm rounded-br-2xl rounded-tr-sm rounded-tl-2xl">
                                        See My Work
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-5 mt-8">
                            <div className="hidden lg:block profile-image flex justify-center">
                                {/* Here Image Come From SCSS File */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;