import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements';
import Icon1 from '../../images/svg-6.svg';
import Icon3 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>
                        About Me
                    </ServicesH2>
                    <ServicesP>
                        This is all about Maximillian Mata.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>
                        My Projects
                    </ServicesH2>
                    <ServicesP>
                        Learn about what really gets my gears going.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>
                        Contact Me
                    </ServicesH2>
                    <ServicesP>
                        Send me a message and I'll get back to you ASAP.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
