import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavText } from './navbarElement';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return ( 
        <>
        <IconContext.Provider value={{color : 'black'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Charlie</NavLogo>
                    <MobileIcon>
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