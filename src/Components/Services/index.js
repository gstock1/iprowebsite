import React, {useState} from 'react';
import Icon1 from '../../Images/sweetHome.png';
import Icon3 from '../../Images/houseSearching.png';
import Icon4 from '../../Images/buyHuse.png';
import { Button } from '../ButtonElement';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesP1, 
    ServicesBtnWrapper, ArrowForward, ArrowRight} from './ServicesElements';

const Services = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    
    return (
        <ServicesContainer id='lookingfor'>
            <ServicesH1>What We Are Looking For</ServicesH1>
            <ServicesP1>When you volunteer your time with us, you will be going to houses identified with their pin number and giving us data that could affect the overall value of the property.
                For example, if a property has solar pannels, front facing windows, or large trees we can use this data to increase the assessed value of the house.
            </ServicesP1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Roofing & Solar Pannels</ServicesH2>
                    <ServicesP>Having good roofing, and/or solar pannels could affect your property value.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Windows</ServicesH2>
                    <ServicesP>Having front facing windows on your property could affect your property value.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Trees</ServicesH2>
                    <ServicesP>Having trees, and having different amounts of trees, could affect your property value.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            <ServicesBtnWrapper>
                <Button to='/questions' onMouseEnter={onHover} onMouseLeave={onHover} primary="false" dark="false">
                    The Forms {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </ServicesBtnWrapper>
        </ServicesContainer>

    )
}


export default Services;