import React from 'react';
import './testimonial.scss';
import ClientOne from '../../assets/images/c1.png';
import ClientTwo from '../../assets/images/c2.png';
import ClientThree from '../../assets/images/c3.png';
import ClientFore from '../../assets/images/c4.png';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import {AiFillStar} from "react-icons/ai";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import {Autoplay} from "swiper";

function Testimonial(props) {
    return (
        <>
            <section id="testimonial-section">
                <div className="container pt-20">
                    <h1 className="text-4xl font-semibold text-gray-800 pb-8">
                        Testimonials
                    </h1>

                    <Swiper
                        breakpoints={{
                            320: {slidesPerView: 1, spaceBetween: 50},
                            480: {slidesPerView: 1, spaceBetween: 50},
                            768: {slidesPerView: 1, spaceBetween: 50},
                            1024: {slidesPerView: 2, spaceBetween: 50},
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <Card color="transparent" shadow={false} className="w-full border border-2 p-6">
                                <CardHeader
                                    color="transparent"
                                    floated={false}
                                    shadow={false}
                                    className="mx-0 flex items-center gap-4 pt-0 pb-8"
                                >
                                    <Avatar
                                        size="lg"
                                        variant="circular"
                                        src={ClientTwo}
                                        alt="ClientTwo"
                                    />
                                    <div className="flex w-full flex-col gap-0.5">
                                        <div className="flex items-center justify-between">
                                            <Typography variant="h5" color="blue-gray">
                                                Fabliha
                                            </Typography>
                                            <div className="5 flex items-center gap-0">
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                            </div>
                                        </div>
                                        <Typography className="text-sm text-gray-700">Belgium</Typography>
                                    </div>
                                </CardHeader>
                                <CardBody className="mb-6 p-0">
                                    <Typography>
                                        &quot;
                                        I asked Roshan to help me with some React JS tasks on manipulating 3D text. He
                                        managed to help me figure out the necessary fixes in order to get each part
                                        completed. Definitely a freelancer I'll be using again.
                                        !&quot;
                                    </Typography>
                                </CardBody>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card color="transparent" shadow={false} className="w-full border border-2 p-6">
                                <CardHeader
                                    color="transparent"
                                    floated={false}
                                    shadow={false}
                                    className="mx-0 flex items-center gap-4 pt-0 pb-8"
                                >
                                    <Avatar
                                        size="lg"
                                        variant="circular"
                                        src={ClientThree}
                                        alt="ClientThree"
                                    />
                                    <div className="flex w-full flex-col gap-0.5">
                                        <div className="flex items-center justify-between">
                                            <Typography variant="h5" color="blue-gray">
                                                Charlie
                                            </Typography>
                                            <div className="5 flex items-center gap-0">
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                            </div>
                                        </div>
                                        <Typography className="text-sm text-gray-700">United States</Typography>
                                    </div>
                                </CardHeader>
                                <CardBody className="mb-6 p-0">
                                    <Typography>
                                        &quot;
                                        He was a great person to work with. Last minute he helped me and his work was
                                        good. Even for little changes, he helped me. Thank you.
                                        !&quot;
                                    </Typography>
                                </CardBody>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card color="transparent" shadow={false} className="w-full border border-2 p-6">
                                <CardHeader
                                    color="transparent"
                                    floated={false}
                                    shadow={false}
                                    className="mx-0 flex items-center gap-4 pt-0 pb-8"
                                >
                                    <Avatar
                                        size="lg"
                                        variant="circular"
                                        src={ClientOne}
                                        alt="candice wu"
                                    />
                                    <div className="flex w-full flex-col gap-0.5">
                                        <div className="flex items-center justify-between">
                                            <Typography variant="h5" color="blue-gray">
                                                Jonasr
                                            </Typography>
                                            <div className="5 flex items-center gap-0">
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                            </div>
                                        </div>
                                        <Typography className="text-sm text-gray-700">Switzerland</Typography>
                                    </div>
                                </CardHeader>
                                <CardBody className="mb-6 p-0">
                                    <Typography>
                                        &quot;
                                        Super friendly, fast and amazing work
                                        !&quot;
                                    </Typography>
                                </CardBody>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card color="transparent" shadow={false} className="w-full border border-2 p-6">
                                <CardHeader
                                    color="transparent"
                                    floated={false}
                                    shadow={false}
                                    className="mx-0 flex items-center gap-4 pt-0 pb-8"
                                >
                                    <Avatar
                                        size="lg"
                                        variant="circular"
                                        src={ClientFore}
                                        alt="ClientFore"
                                    />
                                    <div className="flex w-full flex-col gap-0.5">
                                        <div className="flex items-center justify-between">
                                            <Typography variant="h5" color="blue-gray">
                                                Oliver
                                            </Typography>
                                            <div className="5 flex items-center gap-0">
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                                <AiFillStar className="h-5 w-5 text-yellow-700"/>
                                            </div>
                                        </div>
                                        <Typography className="text-sm text-gray-700">United States</Typography>
                                    </div>
                                </CardHeader>
                                <CardBody className="mb-6 p-0">
                                    <Typography>
                                        &quot;
                                        I highly recommend Roshan! His expertise, attention to detail, and commitment to
                                        delivering high-quality results have made him a true asset to our team.
                                        !&quot;
                                    </Typography>
                                </CardBody>
                            </Card>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Testimonial;