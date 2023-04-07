import React from 'react';
import Hero from "../Components/Hero/Hero";
import Expertise from "../Components/Expertise/Expertise";
import About from "../Components/About/About";
import Service from "../Components/Service/Service";
import Testimonial from "../Components/Testimonial/Testimonial";
import Contact from "../Components/Contact/Contact";
import Portfolio from "../Components/Portfolio/Portfolio";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Home(props) {
    return (
        <>
            <Header/>
            <Hero/>
            <Expertise/>
            <About/>
            <Service/>
            <Portfolio/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;