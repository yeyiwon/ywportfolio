import React from 'react';

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiFirebase } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoJquery } from "react-icons/bi";

import { FaCode } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiVuetify } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiIntellijidea } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import { IoLibrary } from "react-icons/io5";

import { FaJava } from "react-icons/fa6";
import { GrOracle } from "react-icons/gr";
import { SiMysql } from "react-icons/si";


const Skills = () => {
    return(
        <section id="Skill" className="section">
            <div className='section_title'>
                <h2> 📚 Skills </h2>
            </div>

            <div className='flex flex-col'>
                <div className='skill_box_wrap'>
                    <h2> <FaCode color='#F24E1E'/> Languages</h2>
                    <ul className='Skill_box'>
                        <li> <FaHtml5 size={25} color="#E44D26" /> HTML </li>
                        <li> <FaCss3Alt size={25} color="#1572B6" /> CSS </li>
                        <li> <IoLogoJavascript size={25} color="#F7DF1E" /> JavaScript</li>
                        <li> <BiLogoTypescript size={25} color="#2f74c0" /> TypeScript</li>
                    </ul>
                </div>

                <div className='skill_box_wrap'>
                    <h3>사용해봤어요 </h3>
                    <ul className='Skill_box'>
                        <li> <FaPhp size={25} color="#777bb4" /> PHP </li>
                        <li> <FaJava size={25} color="#007396" /> Java </li>
                    </ul>
                </div>

                <div className='skill_box_wrap'>
                    <h2> <IoLibrary color='#0078d4'/> Used Frameworks & Libraries </h2>
                    <ul className='Skill_box'>
                        <li> <FaReact color="rgb(0, 255, 255)" /> React </li>
                        <li> <SiNextdotjs size={22} color="#000" /> Next.js </li>
                        <li> <IoLogoVue size={25} color="#3eb27f" /> Vue.js </li>
                        <li> <BiLogoJquery size={25} color="#0769AD" /> jQuery </li>
                        <li> <SiFirebase size={25} color="#ff9103" /> Firebase </li>
                        <li><SiVuetify size={22} color="#0769AD"/> Vuetify </li>
                        <li><img src="./images/material.png" alt="" />Material UI </li>
                        <li> <RiTailwindCssFill size={25} color="#38b2ac" /> Tailwind CSS </li>
                    
                    </ul>
                </div>
                <div className='skill_box_wrap'>
                    <h2> <FaTools size={20}/> Tools </h2>
                    <ul className='Skill_box'>
                        <li> <FaGithub color="#000"/> GitHub </li>
                        
                        <li> <SiVisualstudiocode size={18} color="#0078d4" /> Visual Studio Code </li>

                        <li> <FaFigma size={20} color="#F24E1E" /> Figma </li>

                        <li> <SiIntellijidea size={18} color="#000" /> IntelliJ IDEA </li>
                    </ul>
                </div>

                <div className='skill_box_wrap'>
                    <h2><FaCode color='#F24E1E'/> Backend</h2>
                    <h3> 사용해봤어요 </h3>
                    <ul className='Skill_box'>
                        <li> <SiMysql size={25} color="#4479A1" /> MySQL </li>
                        <li> <GrOracle size={25} color="#F80000" /> Oracle </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Skills