import React from 'react';
import './portfolio.scss';
import {BsArrowUpRightSquareFill} from "react-icons/bs";
import Pone from '../../assets/images/p1.png';
import PTwo from '../../assets/images/p2.png';
import PThree from '../../assets/images/p3.png';
import PFore from '../../assets/images/p4.png';
import PFive from '../../assets/images/p5.png';
import PSix from '../../assets/images/p6.png';

function Portfolio(props) {
    return (
        <>
            <section id="portfolio-section">
                <div className="container py-40">
                    <h1 className="text-4xl font-semibold text-gray-800 pb-3">
                        Portfolios
                    </h1>
                    <p className="text-gray-700">Each project is a unique piece of Design 🧩</p>

                    <div className="grid lg:grid-cols-2 gap-24 items-center shadow-lg p-8">
                        <div className="scroll_top scrollable" style={{backgroundImage: `url(${Pone})`}}>
                            {/* Here Image Came From Scss File */}
                        </div>

                        <div className="portfolio-details">
                            <h3 className="text-lg font-semibold text-gray-800">RafCart Ecommerce</h3>
                            <p className="mt-4 text-gray-700">
                                The website reflects my focus on clean design, intuitive navigation, and attention to
                                detail, creating a user-friendly experience.
                            </p>

                            <div
                                className="bottom mt-3 font-semibold text-lg block md:flex items-center justify-between gap-6">
                                <div className="stack flex gap-4">
                                    <p>React JS</p>
                                    <p>-</p>
                                    <p>Tailwind CSS</p>
                                </div>

                                <div className="links mt-4 font-semibold">
                                    <a target="_blank" href="https://react-rafcart-website.vercel.app"
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
                            <h3 className="text-lg font-semibold text-gray-800">Movix App</h3>
                            <p className="mt-4 text-gray-700">
                                The website reflects my focus on clean design, intuitive navigation, and attention to
                                detail, creating a user-friendly experience.
                            </p>

                            <div
                                className="bottom mt-3 font-semibold text-lg block md:flex items-center justify-between gap-6">
                                <div className="stack flex gap-4">
                                    <p>Next JS</p>
                                    <p>-</p>
                                    <p>CSS/SASS</p>
                                </div>

                                <div className="links mt-4 font-semibold">
                                    <a target="_blank" href="https://react-movix-website.vercel.app"
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
                            <h3 className="text-lg font-semibold text-gray-800">FM Website</h3>
                            <p className="mt-4 text-gray-700">
                                The website reflects my focus on clean design, intuitive navigation, and attention to
                                detail, creating a user-friendly experience.
                            </p>

                            <div
                                className="bottom mt-3 font-semibold text-lg block md:flex items-center justify-between gap-6">
                                <div className="stack flex gap-4">
                                    <p>HTML - CSS</p>
                                    <p>-</p>
                                    <p>Javascript</p>
                                </div>

                                <div className="links mt-4 font-semibold">
                                    <a target="_blank" href="https://core-html-css-fm-website.vercel.app"
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
                            <h3 className="text-lg font-semibold text-gray-800">Game Website</h3>
                            <p className="mt-4 text-gray-700">
                                The website reflects my focus on clean design, intuitive navigation, and attention to
                                detail, creating a user-friendly experience.
                            </p>

                            <div
                                className="bottom mt-3 font-semibold text-lg block md:flex items-center justify-between gap-6">
                                <div className="stack flex gap-4">
                                    <p>HTML - CSS</p>
                                    <p>-</p>
                                    <p>Javascript</p>
                                </div>

                                <div className="links mt-4 font-semibold">
                                    <a target="_blank" href="https://core-html-css-game-website.vercel.app"
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
                                The website reflects my focus on clean design, intuitive navigation, and attention to
                                detail, creating a user-friendly experience.
                            </p>

                            <div
                                className="bottom mt-3 font-semibold text-lg block md:flex items-center justify-between gap-6">
                                <div className="stack flex gap-4">
                                    <p>React JS</p>
                                    <p>-</p>
                                    <p>Bootstrap</p>
                                </div>

                                <div className="links mt-4 font-semibold">
                                    <a target="_blank" href="https://react-design-valley.vercel.app"
                                       className="flex items-center gap-2 text-secondary" rel="noreferrer">
                                        Live Demo
                                        <BsArrowUpRightSquareFill/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-24 items-center shadow-lg mt-10 p-8">
                        <div className="scroll_top scrollable" style={{backgroundImage: `url(${PSix})`}}>
                            {/* Here Image Came From Scss File */}
                        </div>

                        <div className="portfolio-details">
                            <h3 className="text-lg font-semibold text-gray-800">Travel Landing Page</h3>
                            <p className="mt-4 text-gray-700">
                                The website reflects my focus on clean design, intuitive navigation, and attention to
                                detail, creating a user-friendly experience.
                            </p>

                            <div
                                className="bottom mt-3 font-semibold text-lg block md:flex items-center justify-between gap-6">
                                <div className="stack flex gap-4">
                                    <p>Next JS</p>
                                    <p>-</p>
                                    <p>Tailwind CSS</p>
                                </div>

                                <div className="links mt-4 font-semibold">
                                    <a target="_blank" href="https://travel-landing-page-psi-one.vercel.app/"
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