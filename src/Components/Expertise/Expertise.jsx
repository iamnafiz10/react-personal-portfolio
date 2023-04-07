import React from 'react';
import './expertise.scss';
import Html from '../../assets/images/html.png';
import Css from '../../assets/images/css.png';
import Sass from '../../assets/images/sass.png';
import Bootstrap from '../../assets/images/bootstrap.png';
import MaterialUi from '../../assets/images/material-ui.png';
import TailwindCss from '../../assets/images/tailwind.png';
import ReactJS from '../../assets/images/react.png';
import Javascript from '../../assets/images/javascript.png';
import Php from '../../assets/images/php.png';
import {Tooltip} from "@material-tailwind/react";

function Expertise(props) {
    return (
        <>
            <section id="expertise-section">
                <div className="container pt-20">
                    <div className="grid items-center grid-cols-12">
                        <div className="col-span-12 xl:col-span-2 text-center xl:text-left">
                            <p className="text-lg font-semibold text-blue-gray-800">Area Of Expertise |</p>
                        </div>
                        <div className="col-span-12 xl:col-span-10 mt-6 xl:mt-0">
                            <ul className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-6">
                                <li className="flex justify-center">
                                    <Tooltip
                                        content="HTML"
                                        animate={{
                                            mount: {scale: 1, y: 0},
                                            unmount: {scale: 0, y: 25},
                                        }}
                                    >
                                        <img className="w-fit" src={Html} alt="Html"/>
                                    </Tooltip>
                                </li>

                                <li className="flex justify-center">
                                    <Tooltip
                                        content="CSS"
                                        animate={{
                                            mount: {scale: 1, y: 0},
                                            unmount: {scale: 0, y: 25},
                                        }}
                                    >
                                        <img className="w-fit" src={Css} alt="Css"/>
                                    </Tooltip>
                                </li>

                                <li className="flex justify-center">
                                    <Tooltip
                                        content="Bootstrap"
                                        animate={{
                                            mount: {scale: 1, y: 0},
                                            unmount: {scale: 0, y: 25},
                                        }}
                                    >
                                        <img className="w-fit" src={Bootstrap} alt="Bootstrap"/>
                                    </Tooltip>
                                </li>

                                <li className="flex justify-center">
                                    <Tooltip
                                        content="SASS"
                                        animate={{
                                            mount: {scale: 1, y: 0},
                                            unmount: {scale: 0, y: 25},
                                        }}
                                    >
                                        <img className="w-fit" src={Sass} alt="SASS"/>
                                    </Tooltip>
                                </li>

                                <li className="flex justify-center">
                                    <Tooltip
                                        content="MaterialUi"
                                        animate={{
                                            mount: {scale: 1, y: 0},
                                            unmount: {scale: 0, y: 25},
                                        }}
                                    >
                                        <img className="w-fit" src={MaterialUi} alt="MaterialUi"/>
                                    </Tooltip>
                                </li>

                                <li className="flex justify-center">
                                    <Tooltip
                                        content="React JS"
                                        animate={{
                                            mount: {scale: 1, y: 0},
                                            unmount: {scale: 0, y: 25},
                                        }}
                                    >
                                        <img className="w-fit" src={ReactJS} alt="ReactJS"/>
                                    </Tooltip>
                                </li>

                                <li className="flex justify-center">
                                    <Tooltip
                                        content="Javascript"
                                        animate={{
                                            mount: {scale: 1, y: 0},
                                            unmount: {scale: 0, y: 25},
                                        }}
                                    >
                                        <img className="w-fit" src={Javascript} alt="Javascript"/>
                                    </Tooltip>
                                </li>

                                <li className="flex justify-center">
                                    <Tooltip
                                        content="Tailwind CSS"
                                        animate={{
                                            mount: {scale: 1, y: 0},
                                            unmount: {scale: 0, y: 25},
                                        }}
                                    >
                                        <img className="w-fit" src={TailwindCss} alt="TailwindCss"/>
                                    </Tooltip>
                                </li>

                                <li className="flex justify-center">
                                    <Tooltip
                                        content="PHP"
                                        animate={{
                                            mount: {scale: 1, y: 0},
                                            unmount: {scale: 0, y: 25},
                                        }}
                                    >
                                        <img className="w-fit" src={Php} alt="Php"/>
                                    </Tooltip>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Expertise;