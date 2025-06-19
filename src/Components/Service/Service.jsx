import React from 'react';
import './service.scss';

function Service(props) {
    return (
        <>
            <section id="service-section">
                <div className="container pt-20">
                    <div className="grid grid-cols-12 py-20 gap-0 md:gap-8">
                        <div className="col-span-12 xl:col-span-5">
                            <div
                                className="card max-w-[100%] md:max-w-[350px] relative bg-white shadow-[rgba(13,_38,_76,_0.19)_0px_5px_30px] border py-32 md:py-44">
                                <div className="main-text text-center">
                                    <h1 className="text-9xl text-secondary font-bold">05</h1>
                                    <p className="mt-6 text-lg text-gray-800">Years of Experience</p>
                                </div>

                                <div
                                    className="tag bg-white absolute bottom-0 right-0 md:-right-32 mt-10 flex items-center justify-center rounded-md border border-gray-200 w-full py-6 px-8">
                                    <h1 className="text-5xl text-primary font-semibold">100%</h1>
                                    <p className="ml-6 text-gray-800 text-md">Clients Satisfactions</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 xl:col-span-7 mt-12 md:mt-0">
                            <h1 className="text-4xl font-semibold text-gray-800">My Advantage</h1>
                            <p className="mt-6 text-gray-700">
                                I will Help you by Creating a website from scratch and fixing any issues and bugs on
                                your React Js or Next Js website.
                                Also provide complex architectural solutions with smooth and clean User Interfaces.
                            </p>

                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                                <div className="box-one rounded-xl text-center">
                                    <div className="inner rounded-xl p-8 m-1 bg-white">
                                        <h2 className="text-4xl font-jost font-semibold">98%</h2>
                                        <p className="mt-3 text-xl font-jost text-yellow-600">Design</p>
                                    </div>
                                </div>

                                <div className="box-two rounded-xl text-center">
                                    <div className="inner rounded-xl p-8 m-1 bg-white">
                                        <h2 className="text-4xl font-jost font-semibold">100%</h2>
                                        <p className="mt-3 text-xl font-jost text-green-300">Debugging</p>
                                    </div>
                                </div>

                                <div className="box-three rounded-xl text-center">
                                    <div className="inner rounded-xl p-8 m-1 bg-white">
                                        <h2 className="text-4xl font-jost font-semibold">90%</h2>
                                        <p className="mt-3 text-xl font-jost text-red-300">Structures</p>
                                    </div>
                                </div>

                                <div className="box-fore rounded-xl text-center">
                                    <div className="inner rounded-xl p-8 m-1 bg-white">
                                        <h2 className="text-4xl font-jost font-semibold">100%</h2>
                                        <p className="mt-3 text-xl font-jost text-yellow-700">Satisfaction</p>
                                    </div>
                                </div>

                                <div className="box-five rounded-xl text-center">
                                    <div className="inner rounded-xl p-8 m-1 bg-white">
                                        <h2 className="text-4xl font-jost font-semibold">99%</h2>
                                        <p className="mt-3 text-xl font-jost text-blue-300">Consulting</p>
                                    </div>
                                </div>

                                <div className="box-six rounded-xl text-center">
                                    <div className="inner rounded-xl p-8 m-1 bg-white">
                                        <h2 className="text-4xl font-jost font-semibold">95%</h2>
                                        <p className="mt-3 text-xl font-jost text-purple-300">Algorithm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Service;