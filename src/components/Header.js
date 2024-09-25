// Header.js
import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import { RiSunLine } from "react-icons/ri";
import { RiMoonLine } from "react-icons/ri";


const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        setDarkMode(isDarkMode);
    }, []);

    return (
        <header className="header">
            <h1 className="header_title">Yeyiwon</h1>
                <ul className="nav_list">
                    <li><Link to="Home" spy={true} smooth={true} duration={500} className="nav_link">Home</Link></li>
                    <li><Link to="About" spy={true} smooth={true} duration={500} className="nav_link">About</Link></li>

                    <li><Link to="Skill" spy={true} smooth={true} duration={500} className="nav_link">Skill</Link></li>
                    <li><Link to="Project" spy={true} smooth={true} duration={500} className="nav_link">Project</Link></li>
                </ul>


            <div className="iconbtn" onClick={toggleDarkMode}>
                {darkMode ? <RiSunLine size={22} /> : <RiMoonLine size={22}/>}
            </div>
        </header>
    );
}

export default Header;
