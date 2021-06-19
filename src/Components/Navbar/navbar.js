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
                    {/* <NavBtn>
                        <NavBtnLink to="mailto:dev.charlieaprilianto">Mail Me!</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
            
            {/* <IconContext.Provider value={{color : 'black'}}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <div className="menu-icon" onClick={showSidebar}>
                            {sidebar ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
                        </div>
                        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                            <ul className="nav-menu-items"> 
                                {SidebarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.className} onClick={showSidebar}>
                                            <Link to={item.path}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </IconContext.Provider> */}
        </>
    )
}

export default Navbar;