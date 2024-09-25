import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiFirebaseFill } from "react-icons/ri";
import { IoLogoVue } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoJquery } from "react-icons/bi";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

import { FaJava } from "react-icons/fa6";
import { GrOracle } from "react-icons/gr";
import { SiMysql } from "react-icons/si";
import { SiApachetomcat } from "react-icons/si";

const ProjectLink = [
    {
        title: "😎 MySNSProject",
        image: "./images/Yeyiwon.png",
        description: "React와 TypeScipt를 활용한 SNS 프로젝트입니다.",
        skills: [
            { name: "React", icon: <FaReact color="rgb(0, 255, 255)" />, className: "ReactBadge" },
            { name: "TypeScript", icon: <BiLogoTypescript size={20} color="#2f74c0" /> },
            { name: "Firebase", icon: <RiFirebaseFill size={20} color="#ff9103" /> }
        ],
        links: [
            { label: "사이트 바로 가기", url: "https://mysnsproject-77f84.web.app/", icon: <FaLink color="#333"/> },
            { label: "깃허브", url: "https://github.com/yeyiwon/myreactApp", icon: <FaGithub color="#000"/> },
            { label: "PDF", url: "./pdfs/MySNSpptfile(최종).pdf", icon: <FaRegFilePdf color="#333"/>  }
        ],
        isTeamProject: false,
        duration: "2024.09.02 ~ 2024.09.21",
        testId: "test@gmail.com",
        testPassword: "test1324*A", 
    },
    {
        title: "☕️ PaulBasset Team Project",
        image: "./images/PaulBasset.png",
        description: "Vue.js로 제작한 폴바셋 어플리케이션 리뉴얼을 주제로 한 프로젝트입니다",
        skills: [
            { name: "Vue", icon: <IoLogoVue size={18} color="#3eb27f" />, className: "ReactBadge" },
            { name: "JavaScript", icon: <IoLogoJavascript size={18} color="#F7DF1E" />, className: "ReactBadge" },
            { name: "Firebase", icon: <RiFirebaseFill size={20} color="#ff9103" /> }
        ],
        links: [
            { label: "사이트 바로 가기", url: "https://paulbassett-42763.web.app/", icon: <FaLink color="#333"/> },
            { label: "깃허브", url: "https://github.com/yeyiwon/PaulBassetTeamProject", icon: <FaGithub color="#000"/> },
            { label: "PDF", url: "./pdfs/폴바셋리뉴얼.pdf", icon: <FaRegFilePdf color="#333"/> }
        ],
        isTeamProject: true,
        duration: "2024.07.25 ~ 2024.08.14",
        testId: "test@gmail.com",
        testPassword: "test1324*A", 
    },
    {
        title: "🥯 LondonBagle museum",
        image: "./logo512.png",
        description: "런던베이글 사이트 자체제작 웹퍼플리싱 프로젝트입니다.",
        skills: [
            { name: "HTML", icon: <FaHtml5 size={22} color="#E44D26" /> },
            { name: "CSS", icon: <FaCss3Alt size={22} color="#1572B6" /> },
            { name: "JavaScript", icon: <IoLogoJavascript size={18} color="#F7DF1E" />, className: "ReactBadge" },
            { name: "Jquery", icon: <BiLogoJquery size={18} color="#0769AD" /> }
        ],
        links: [
            { label: "사이트 바로 가기", url: "https://yeyiwon.github.io/LondonBagle_museum/", icon: <FaLink color="#333"/> },
            { label: "깃허브", url: "https://github.com/yeyiwon/LondonBagle_museum", icon: <FaGithub color="#000"/> },
            { label: "PDF", url: "./pdfs/londonBagle.pdf", icon: <FaRegFilePdf color="#333"/> }
        ],
        isTeamProject: true,
        duration: "2024.06.10 ~ 2024.07.03",
        testId: "11111",
        testPassword: "1234", 
    },
    {
        title: "🏨 Hotel_signial",
        image: "./images/Yeyiwon.png",
        description: "시그니엘 홈페이지 리뉴얼 웹퍼플리싱 개발 공부 당시 첫프로젝트입니다.",
        skills: [
            { name: "HTML", icon: <FaHtml5 size={22} color="#E44D26" /> },
            { name: "CSS", icon: <FaCss3Alt size={22} color="#1572B6" /> },
            { name: "JavaScript", icon: <IoLogoJavascript size={18} color="#F7DF1E" />, className: "ReactBadge" },
            { name: "Jquery", icon: <BiLogoJquery size={18} color="#0769AD" />}
        ],
        links: [
            { label: "사이트 바로 가기", url: "https://yeyiwon.github.io/Hotel_signial/", icon: <FaLink color="#333"/> },
            { label: "깃허브", url: "https://github.com/yeyiwon/Hotel_signial", icon: <FaGithub color="#000"/> },
        ],
        isTeamProject: false,
        duration: "2023.09.18~ 2023.09.25"
    },
    {
        title: "🏕️ HealingCamp Team Project",
        image: "./images/Yeyiwon.png",
        description: "캠핑을 취미로 가진 사람들이 더 쉽게 캠핑장을 찾고 캠핑 용품도 한 홈페이지에서 해결할 수 있도록 모아둔 프로젝트",
        skills: [
            { name: "HTML", icon: <FaHtml5 size={22} color="#E44D26" /> },
            { name: "CSS", icon: <FaCss3Alt size={22} color="#1572B6" /> },
            { name: "JavaScript", icon: <IoLogoJavascript size={18} color="#F7DF1E" />, className: "ReactBadge" },
            { name: "Jquery", icon: <BiLogoJquery size={18} color="#0769AD" /> },
            { name: "Java", icon: <FaJava size={22} color="#007396" /> },
            { name: "Oracle", icon: <GrOracle size={22} color="#F80000" /> },
            { name: "MySql", icon: <SiMysql size={18} color="#00758F" /> },
            { name: "Apachetomcat", icon: <SiApachetomcat size={18} color="#F9A800" /> },
        ],
        links: [
            { label: "깃허브", url: "https://github.com/user/projectC", icon: <FaGithub color="#000"/> },
            { label: "PDF", url: "./pdfs/힐링캠프.pdf", icon: <FaRegFilePdf color="#333"/> }
        ],
        isTeamProject: true,
        duration: "2023.11.16 ~ 2023.11.29"
    },
];


const Project = () => {
    return (
        <section id="Project" className="section1">
            <div className='section_title'>
                <h2>🙌🏻 Project | SideProject</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ProjectLink.map((project, index) => (
                    <div key={index} className="Project_card">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <h3 className="text-lg font-semibold text-gray-600"> {project.title} 
                        
                        {project.isTeamProject ? (
                            <span className="TeamProject">팀 프로젝트</span>
                        ) : (
                            <span className="ProjectType">개인 프로젝트</span>
                        )}
                        </h3>
                        <p className="text-gray-700 text-sm">{project.description}</p>
                        <p className="text-gray-500 text-xs">{project.duration}</p>
                        
                        <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill, idx) => (
                                <div key={idx} className={`badge ${skill.className}`}>
                                    {skill.icon} {skill.name}
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            {project.links.map((link, idx) => (
                                <div key={idx} className="LinkBtn">
                                    <a href={link.url} className="flex items-center gap-2">
                                        {link.icon}
                                        {link.label}</a>
                                </div>
                            ))}
                        </div>
                        {/* <div>
                        
                            
                            <p>{project.testId}</p>
                            <p>{project.testPassword}</p>
                            
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
