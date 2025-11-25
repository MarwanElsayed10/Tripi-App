"use client"
import Nav from './Nav'
import MobileNav from './MobileNav'
import { useState } from 'react'

const ResponsiveNav = () => {
    const [showNav , setShowNav] = useState<boolean>(false); 
    const [isOpened , setIsOpened] = useState<boolean>(false);
    const handleShowNav = ()=> {
        setShowNav(true);
        setIsOpened(true);
    }
    const handleHideNav = ()=> {
        setShowNav(false);
        setIsOpened(false);
    }
    return (
        <div>
        <Nav openNav={!isOpened ? handleShowNav : handleHideNav} />
        <MobileNav showNav={showNav} closeNav={handleHideNav}/>
        </div>
    )
}

export default ResponsiveNav
