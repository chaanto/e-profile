import React from 'react'
import { SidebarContainer, Icon, CloseIcon } from './sidebarElement';
import { SidebarData } from '../navbarData';
import { SidebarWrapper, SidebarLink, NavText, SidebarMenu, SidebarItem } from './sidebarElement';
import { IconContext } from 'react-icons';

const sidebar = ({isOpen, toggle}) => {
    return (
        <IconContext.Provider value={{color : 'black'}}>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        {SidebarData.map((item, index) => {
                            return (
                            <SidebarItem key={index} >
                                <SidebarLink to={item.path}>
                                    <NavText>{item.icon}</NavText>
                                    <NavText>{item.title}</NavText>
                                </SidebarLink>
                            </SidebarItem>
                            );
                        })}
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </IconContext.Provider>
    )
}

export default sidebar
