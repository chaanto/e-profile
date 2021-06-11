import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: < GiIcons.GiCoffeeCup /> ,
        className: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: < MdIcons.MdPermDeviceInformation /> ,
        className: 'nav-text'
    },
    {
        title: 'Project',
        path:'/project',
        icon: <RiIcons.RiComputerFill/>,
        className : 'nav-text'
    },
    {
        title: 'Resume',
        path:'/resume',
        icon: <AiIcons.AiOutlineHistory/>,
        className : 'nav-text'
    },
];