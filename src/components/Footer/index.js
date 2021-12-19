import React from 'react';
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinkTitle, FooterLinksWrapper, FooterWrap, SocialMediaContainer, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink, SocialLogo, SocialLogoImage } from './FooterElements';
import { FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import socialLogoImage from '../../images/mm_design.png'


const Footer = () => {

    const toggleToHome = () => {
        scroll.scrollToTop()
    }


    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to='/signin'>Work Experience</FooterLink>
                            <FooterLink to='/signin'>Projects</FooterLink>
                            <FooterLink to='/signin'>Hobbies</FooterLink>
                            <FooterLink to='/signin'>Background</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>My Projects</FooterLinkTitle>
                            <FooterLink to='/signin'>iOS Development</FooterLink>
                            <FooterLink to='/signin'>Linux Work</FooterLink>
                            <FooterLink to='/signin'>Smart Grid</FooterLink>
                            <FooterLink to='/signin'>Dual-Axis Solar Panels</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/signin'>Address</FooterLink>
                            <FooterLink to='/signin'>Phone</FooterLink>
                            <FooterLink to='/signin'>Email</FooterLink>
                            <FooterLink to='/signin'>Social Media</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Thank You</FooterLinkTitle>
                            <FooterLink to='/signin'>For Taking</FooterLink>
                            <FooterLink to='/signin'>The Time</FooterLink>
                            <FooterLink to='/signin'>To Visiçt</FooterLink>
                            <FooterLink to='/signin'>My Page</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMediaContainer>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleToHome}>
                            <SocialLogoImage src={socialLogoImage} /></SocialLogo>
                        <WebsiteRights>MaximillianMata © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.linkedin.com/in/maximillianm/" target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMediaContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
