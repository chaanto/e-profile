import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';
import { MdFingerprint } from 'react-icons/md';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    // const  
    return ( 
        <>
            <IconContext.Provider value={{color : 'black'}}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <div className="menu-icon" onClick={showSidebar}>
                            {sidebar ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
                        </div>
                        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                            <ul className="nav-menu-items"> 
                                {SidebarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.className}>
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
            </IconContext.Provider>
        </>
    )
}

export default Navbar;