import React from 'react';
import './portfolio.scss';
import {BsArrowUpRightSquareFill} from "react-icons/bs";
import Pone from '../../assets/images/p1.png';
import PTwo from '../../assets/images/p2.png';
import PThree from '../../assets/images/p3.png';
import PFore from '../../assets/images/p4.png';
import PFive from '../../assets/images/p5.png';

function Portfolio(props) {
    return (
        <>
            <section id="portfolio-section">
                <div className="container py-40">
                    <h1 className="text-4xl font-semibold text-gray-800 pb-3">
                        Portfolio
                    </h1>
                    <p className="text-gray-700">Each project is a unique piece of development 🧩</p>

                    <div className="grid lg:grid-cols-2 gap-24 items-center shadow-lg p-8">
                        <div className="scroll_top scrollable" style={{backgroundImage: `url(${Pone})`}}>
                            {/* Here Image Came From Scss File */}
                        </div>

                        <div className="portfolio-details">
                            <h3 className="text-lg font-semibold text-gray-800">RafCart Ecommerce</h3>
                            <p className="mt-4 text-gray-700">
                                A car rental website is an online
                                platform that allows users to rent cars for personal or business use. The website
                                provides an interface for searching, comparing, and reserving cars.
                            </p>

                            <div className="bottom mt-4 font-semibold text-lg block md:flex items-center justify-between gap-6">
                                <div className="stack flex gap-4">
                                    <p>React</p>
                                    <p>Tailwind CSS</p>
                                </div>

                                <div className="links mt-4 font-semibold">
                                    <a target="_blank" href="https://roshan-react-rafcart-ecommerce.netlify.app"
                                       className="flex items-center gap-2 text-secondary" rel="noreferrer">
                                        Live Demo
                                        <BsArrowUpRightSquareFill/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-24 items-center shadow-lg mt-10 p-8">

                        <div className="portfolio-details">
                            <h3 className="text-lg font-semibold text-gray-800">Movie Ecommerce</h3>
                            <p className="mt-4 text-gray-700">
                                A car rental website is an online
                                platform that allows users to rent cars for personal or business use. The website
                                provides an interface for searching, comparing, and reserving cars.
                            </p>

                            <div className="bottom mt-4 font-semibold text-lg block md:flex items-center justify-between gap-6">
                                <div className="stack flex gap-4">
                                    <p>React</p>
                                    <p>Tailwind CSS</p>
                                </div>

                                <div className="links mt-4 font-semibold">
                                    <a target="_blank" href="https://roshan-react-movix-application.netlify.app"
                                       className="flex items-center gap-2 text-secondary" rel="noreferrer">
                                        Live Demo
                                        <BsArrowUpRightSquareFill/>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="scroll_top scrollable" style={{backgroundImage: `url(${PTwo})`}}>
                            {/* Here Image Came From Scss File */}
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-24 items-center shadow-lg mt-10 p-8">
                        <div className="scroll_top scrollable" style={{backgroundImage: `url(${PThree})`}}>
                            {/* Here Image Came From Scss File */}
                        </div>

                        <div className="portfolio-details">
                            <h3 className="text-lg font-semibold text-gray-800">Zaika Ecommerce</h3>
                            <p className="mt-4 text-gray-700">
                                A car rental website is an online
                                platform that allows users to rent cars for personal or business use. The website
                                provides an interface for searching, comparing, and reserving cars.
                            </p>

                            <div className="bottom mt-4 font-semibold text-lg block md:flex items-center justify-between gap-6">
                                <div className="stack flex gap-4">
                                    <p>React</p>
                                    <p>Bootstrap</p>
                                </div>

                                <div className="links mt-4 font-semibold">
                                    <a target="_blank" href="https://roshan-react-zaika-ecommerce.netlify.app"
                                       className="flex items-center gap-2 text-secondary" rel="noreferrer">
                                        Live Demo
                                        <BsArrowUpRightSquareFill/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-24 items-center shadow-lg mt-10 p-8">

                        <div className="portfolio-details">
                            <h3 className="text-lg font-semibold text-gray-800">Shoes Ecommerce</h3>
                            <p className="mt-4 text-gray-700">
                                A car rental website is an online
                                platform that allows users to rent cars for personal or business use. The website
                                provides an interface for searching, comparing, and reserving cars.
                            </p>

                            <div className="bottom mt-4 font-semibold text-lg block md:flex items-center justify-between gap-6">
                                <div className="stack flex gap-4">
                                    <p>React</p>
                                    <p>Bootstrap</p>
                                </div>

                                <div className="links mt-4 font-semibold">
                                    <a target="_blank" href="https://roshan-react-ecom-ecommerce.netlify.app"
                                       className="flex items-center gap-2 text-secondary" rel="noreferrer">
                                        Live Demo
                                        <BsArrowUpRightSquareFill/>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="scroll_top scrollable" style={{backgroundImage: `url(${PFore})`}}>
                            {/* Here Image Came From Scss File */}
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-24 items-center shadow-lg mt-10 p-8">
                        <div className="scroll_top scrollable" style={{backgroundImage: `url(${PFive})`}}>
                            {/* Here Image Came From Scss File */}
                        </div>

                        <div className="portfolio-details">
                            <h3 className="text-lg font-semibold text-gray-800">Design Valley</h3>
                            <p className="mt-4 text-gray-700">
                                A car rental website is an online
                                platform that allows users to rent cars for personal or business use. The website
                                provides an interface for searching, comparing, and reserving cars.
                            </p>

                            <div className="bottom mt-4 font-semibold text-lg block md:flex items-center justify-between gap-6">
                                <div className="stack flex gap-4">
                                    <p>React</p>
                                    <p>Bootstrap</p>
                                </div>

                                <div className="links mt-4 font-semibold">
                                    <a target="_blank" href="https://roshan-react-design-valley.netlify.app"
                                       className="flex items-center gap-2 text-secondary" rel="noreferrer">
                                        Live Demo
                                        <BsArrowUpRightSquareFill/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;