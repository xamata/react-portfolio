import React, { useState } from 'react';
import { HeroBackground, HeroContent, HeroH1, HeroContainer, ImageBackground, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
// import Video from '../../videos/video.mp4'
import Image from '../../images/img-me.jpg';
import { ButtonS } from '../ButtonElements.js';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer id='home'>
            <HeroBackground>
                <ImageBackground src={Image} type='img-me/jpg' />
            </HeroBackground>
            <HeroContent>
                <HeroH1> Hi, I'm Maximllian Mata </HeroH1>
                <HeroP>Aspiring Software Developer from Whittier, CA. My head and my heart are in hot pursuit to make my dream a reality. Let me show you around!
                </HeroP>
                <HeroBtnWrapper>
                    <ButtonS
                        to='about'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        spy={true}
                        smooth={true}
                        duration={500}
                        exact='true'
                        offset={-80}
                    >
                        About Me{hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonS>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
