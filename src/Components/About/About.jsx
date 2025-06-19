import React from 'react';
import './about.scss';
import AboutMe from "../../assets/images/about-me.png";
import resume from "../../assets/cv/resume.pdf";
import {Button} from "@material-tailwind/react";

function About(props) {
    const handleDownload = () => {
        const fileUrl = resume;  // Use the imported resume path

        // Create an anchor element and trigger the download
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Nafiz-Resume.pdf'; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <section id="about-section" className="mt-20">
                <div className="container py-20">
                    <div className="grid grid-cols-12 gap-0 xl:gap-20">
                        <div className="col-span-12 xl:col-span-4 image-wrap">
                            <div className="image" style={{backgroundImage: `url(${AboutMe})`}}>
                                {/* Here Image Come From SCSS File */}
                            </div>
                        </div>

                        <div className="mt-8 xl:mt-0 col-span-12 xl:col-span-8">
                            <div className="about-details">
                                <h2 className="text-primary font-semibold text-xl">ABOUT ME</h2>
                                <h2 className="mt-4 font-bold text-gray-800 text-3xl sm:text-4xl">
                                    Web Designer
                                </h2>
                                <p className="mt-4 font-poppins text-gray-700 text-md leading-8">
                                    I am a Web designer with React JS,
                                    Next JS and Tailwind CSS Expert. I Love working with HTML, CSS, Bootstrap,
                                    Tailwind, React JS, Next JS, Material UI, And React Animations.
                                </p>
                            </div>

                            <div className="border my-6 border-t-gray-300"></div>

                            <div className="about-me mt-4 grid grid-cols-12">
                                <div className="col-span-12 lg:col-span-6">
                                    <ul className="space-y-6">
                                        <li>
                                            <h4 className="font-bold text-black uppercase">Full Name</h4>
                                            <p className="text-gray-700 text-md">Roshan Saiham Nafiz</p>
                                        </li>

                                        <li>
                                            <h4 className="font-bold text-black uppercase">Email</h4>
                                            <p className="text-gray-700 text-md">iamnafiz10@gmail.com</p>
                                        </li>

                                        <li>
                                            <h4 className="font-bold text-black uppercase">Country</h4>
                                            <p className="text-gray-700 text-md">
                                                Bangladesh
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-4 md:mt-0 col-span-12 md:col-span-6">
                                    <ul className="space-y-6">
                                        <li>
                                            <h4 className="font-bold text-black uppercase">AGE</h4>
                                            <p className="text-gray-700 text-md">20 Years</p>
                                        </li>

                                        <li>
                                            <h4 className="font-bold text-black uppercase">Phone</h4>
                                            <p className="text-gray-700 text-md">(+880) 01321764096</p>
                                        </li>

                                        <li>
                                            <h4 className="font-bold text-black uppercase">Freelance</h4>
                                            <p className="text-gray-700 text-md">
                                                Available
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="capitalize mt-6 font-semibold bg-primary font-poppins flex items-center gap-3 rounded-bl-xl rounded-br-sm rounded-tr-xl rounded-tl-sm"
                                onClick={handleDownload}
                            >
                                Download CV
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;