import React, {useState} from 'react';
//import Barrington from '..Components/Barrington';
import HeroSection from '../Components/HeroSection';
import Services from '../Components/Services'
import { homeObjFour } from '../Components/InfoSection/Data';
import InfoSection from '../Components/InfoSection';
import Footer from '../Components/Footer';

const BarringtonPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return(
        <>
            <HeroSection />
            <InfoSection {...homeObjFour}/>

            <Footer />
        </>
    )
}

export default BarringtonPage;