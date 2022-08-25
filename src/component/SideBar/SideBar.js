import React, { useState } from "react";
import CollapseIcon from '../../assets/icons/CollapseIcon'
import './sideBar.css'
import SideBarTop from './SlideBarTop/SideBarTop'


const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const handleTrigger = () => setIsOpen(!isOpen);
    return (
        <div className={`sideBar ${isOpen ? "sidebarOpen" : "sidebarClose"}`}>
            <div className={`trigger ${isOpen ? "sidebarOpen" : "sidebarClose"}`}>
                <div className="collapseIcon" onClick={handleTrigger} >{<CollapseIcon />}</div>
                <SideBarTop />
            </div>
        </div>
    )
}

export default SideBar
