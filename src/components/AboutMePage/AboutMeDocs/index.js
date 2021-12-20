import React from 'react'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from '../../InfoSection/InfoElements'
import { Icon } from '../../Signin/SigninElements'
import { AboutMeHeaderLogo, ButtonDiv, ResumeLink } from './AboutMeDocElements'
import socialLogoImage from '../../../images/mm_design.png'

const AboutMeDocuments = ({ lightBg, id, img, alt, imgStart, topline, lightText, headline, darkText, description, primary, dark, dark2, buttonLabel, topDarkText }) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <Icon to='/react-portfolio'>
                        <AboutMeHeaderLogo src={socialLogoImage} />
                    </Icon>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine topDarkText={topDarkText}>{topline}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <ResumeLink href="//drive.google.com/file/d/1AcUfIQC7ZRNMFKrqUV6II9z7ducgKINQ/view?usp=sharing" target='_blank' aria-label='Resume'>
                                        <ButtonDiv
                                            spy={true}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}>
                                            {buttonLabel}
                                        </ButtonDiv>
                                    </ResumeLink>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default AboutMeDocuments