import React from 'react';
import './contact.scss';
import {
    Card,
    Input,
    Button,
    Textarea,
} from "@material-tailwind/react";
import {AiOutlineUser} from "react-icons/ai";
import {TbLocation} from "react-icons/tb";
import {BsTelephone} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";

function Contact(props) {
    return (
        <>
            <section id="contact-section">
                <div className="container pt-40">
                    <h1 className="text-4xl font-semibold text-gray-800 pb-7">
                        Get in Touch
                    </h1>
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="contact-form">
                            <Card color="transparent" shadow={false}>
                                <form className="my-8">
                                    <div className="hidden mb-16 md:flex items-center gap-6">
                                        <Input size="lg" variant="static" label="Name"/>
                                        <Input size="lg" variant="static" label="Email"/>
                                    </div>

                                    <div className="md:hidden mb-16 flex items-center gap-6">
                                        <Input size="lg" variant="static" label="Name"/>
                                    </div>

                                    <div className="md:hidden mb-16 flex items-center gap-6">
                                        <Input size="lg" variant="static" label="Email"/>
                                    </div>

                                    <div className="mb-16 flex items-center gap-6">
                                        <Input size="lg" variant="static" label="Subject"/>
                                    </div>

                                    <div className="mb-16 flex items-center gap-6">
                                        <Textarea size="lg" variant="static" label="Message"/>
                                    </div>
                                    <Button size="lg"
                                            className="capitalize font-semibold bg-primary font-poppins uppercase  flex items-center gap-3 rounded-bl-xl rounded-br-sm rounded-tr-xl rounded-tl-sm">
                                        Send Message
                                    </Button>
                                </form>
                            </Card>
                        </div>

                        <div className="contact-details mt-5">
                            <h2 className="text-xl text-gray-800 font-semibold">Contact Info</h2>
                            <p className="mt-4 text-md text-gray-700">
                                Always available for freelance work if the right project comes along, Feel free to
                                contact me!
                            </p>

                            <div className="timeline pt-8">
                                <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
                                    <div className="flex md:contents">
                                        <div className="col-start-2 col-end-4 mr-10 relative">
                                            <div className="h-full w-8 flex items-center justify-center">
                                                <div
                                                    className="h-full w-1 bg-secondary pointer-events-none"></div>
                                            </div>
                                            <div
                                                className="w-8 h-8 flex items-center justify-center absolute top-1/2 -mt-3 rounded-full bg-secondary shadow text-center">
                                                <AiOutlineUser/>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white text-gray-700 col-start-4 col-end-12 my-4 w-full">
                                            <h3 className="font-semibold text-lg mb-1">Name</h3>
                                            <p className="leading-tight text-justify w-full">
                                                Roshan Nafiz
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex md:contents">
                                        <div className="col-start-2 col-end-4 mr-10 relative">
                                            <div className="h-full w-8 flex items-center justify-center">
                                                <div
                                                    className="h-full w-1 bg-secondary pointer-events-none"></div>
                                            </div>
                                            <div
                                                className="w-8 h-8 flex items-center justify-center absolute top-1/2 -mt-3 rounded-full bg-secondary shadow text-center">
                                                <BsTelephone/>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white text-gray-700 col-start-4 col-end-12 my-4 w-full">
                                            <h3 className="font-semibold text-lg mb-1">Call Me</h3>
                                            <p className="leading-tight text-justify w-full">
                                                (+880) 01321764096
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex md:contents">
                                        <div className="col-start-2 col-end-4 mr-10 relative">
                                            <div className="h-full w-8 flex items-center justify-center">
                                                <div
                                                    className="h-full w-1 bg-secondary pointer-events-none"></div>
                                            </div>
                                            <div
                                                className="w-8 h-8 flex items-center justify-center absolute top-1/2 -mt-3 rounded-full bg-secondary shadow text-center">
                                                <HiOutlineMail/>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white text-gray-700 col-start-4 col-end-12 my-4 w-full">
                                            <h3 className="font-semibold text-lg mb-1">Email Me</h3>
                                            <p className="leading-tight text-justify w-full">
                                                roshansaihamnafiz@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex md:contents">
                                        <div className="col-start-2 col-end-4 mr-10 relative">
                                            <div className="h-full w-8 flex items-center justify-center">
                                                <div
                                                    className="h-full w-1 bg-primary pointer-events-none"></div>
                                            </div>
                                            <div
                                                className="w-8 h-8 flex items-center justify-center absolute top-1/2 -mt-3 rounded-full bg-primary shadow text-center">
                                                <TbLocation/>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white text-gray-700 col-start-4 col-end-12 my-4 w-full">
                                            <h3 className="font-semibold text-lg mb-1">Location</h3>
                                            <p className="leading-tight text-justify w-full">
                                                Rajshahi, Bangladesh
                                            </p>
                                        </div>
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

export default Contact;