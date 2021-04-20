import React, {useState} from 'react';
import Icon1 from '../../Images/realatorBackground.png';
import {Button} from '../ButtonElement';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Icon1} />
            </HeroBg>
            <HeroContent>
                <HeroH1>YOU CAN HELP YOUR COMMUNITY!</HeroH1>
                <HeroP>
                In Cook County, income tax is one of the major sources of income for local and state governments. This means that this is 
                money that goes towards helping your community! However, we need your help to improve the fairness of local property taxes in your area. 
                If you take a look at the picture of the cook county area below, areas that are lighter in color are greatly in need of your help! 
                You can help your community by filling out a form for houses in your local community. All it takes is 3 EASY steps!
                </HeroP>
                <HeroBtnWrapper>
                    <Button onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Learn More {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    );
};

export default HeroSection;