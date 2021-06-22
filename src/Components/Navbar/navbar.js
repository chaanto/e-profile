import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from '../navbarData';
import { IconContext } from 'react-icons';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavText } from './navbarElement';

function Navbar({ toggle }) {

    return ( 
        <>
            <IconContext.Provider value={{color : 'black'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">Charlie</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaIcons.FaBars />
                        </MobileIcon>
                        <NavMenu>
                            {SidebarData.map((item, index) => {
                                return (
                                    <NavItem key={index}>
                                        <NavLinks to={item.path}>
                                            <NavText>{item.icon}</NavText>
                                            <NavText>{item.title}</NavText>
                                        </NavLinks>
                                    </NavItem>
                                );
                            })}
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;