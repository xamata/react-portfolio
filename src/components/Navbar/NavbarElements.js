import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

//how the navbar will look
export const Nav = styled.nav`
    id:'navhome';
    /* background: ${({ scrollNav }) => (scrollNav ? '#000' : 'white')}; */
    background: #000;
    height: 80px;
    margin-top: 0px; 
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    /* transition: 0.8s all ease; */

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
}
`;

//Navbar area specifications
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

//setup for react scroll and router(R in LinkR; creating an alias for Link scroll link doesn't overlap)
export const NavLogo = styled(LinkR)`
    /* color: ${({ scrollNav }) => (scrollNav ? 'white' : 'black')}; */
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`
export const NavLogoImage = styled.img`
position: relative;
width: 60px;
`

//for the three ticks on the top right corner
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    alignn-items: center;
    list-style: none;
    text-align: center;
    margin-right:-22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
height: 80px;
`
export const NavLinks = styled(LinkS)`
    /* color: ${({ scrollNav }) => (scrollNav ? 'white' : 'black')}; */
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #4063FF;
    }
`

// the nav button of the three ticks
export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

// the react router links within the three ticks
export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #4063FF;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`