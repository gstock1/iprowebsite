import React, {useState} from 'react';
import HeroSection from '../Components/HeroSection';
import Services from '../Components/Services'
import Navbar from '../Components/Navbar';
import { homeObjOne, homeObjTwo } from '../Components/InfoSection/Data';
import InfoSection from '../Components/InfoSection';
import Footer from '../Components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return(
        <>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Services />
            <InfoSection {...homeObjTwo}/>

            <Footer />
        </>
    );
};

export default Home;