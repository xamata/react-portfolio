import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavLogoImage } from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'
import navImage from '../../images/mm_design.png'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            {/* to change the color of the icons with one swift move */}
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo
                            to='/'
                            onClick={toggleHome}
                            scrollNav={scrollNav}>
                            <NavLogoImage src={navImage} />
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                {/* duration is speed, spy tells you which one you're clicking on(for an active class with the highlights and colors,) */}
                                <NavLinks
                                    to='about'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    scrollNav={scrollNav}
                                // activeClass = "active" not necessary bc the .active within the navbar elements navlinks!
                                >
                                    About Me
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to='projects'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    scrollNav={scrollNav}
                                >
                                    My Projects
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to='contact'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    scrollNav={scrollNav}
                                >
                                    Contact
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/signin'>
                                Sign In
                            </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
