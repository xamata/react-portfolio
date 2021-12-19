import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarRoute, SidebarBtnWrap, SidebarLink, SidebarWrapper, SidebarMenu } from './SiderbarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        // added a toggle action so when clicked opens/closes
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            {/* reacreating the Navmenu in the sidebar*/}
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle} >
                        About Me
                    </SidebarLink>
                    <SidebarLink to='projects' onClick={toggle} >
                        My Projects
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact
                    </SidebarLink>
                    {/* There's a '/' before signin bc it's a router link */}
                    <SidebarLink to='signup' onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign In
                    </SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
