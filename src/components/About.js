import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from "react-icons/si";
import { SiNaver } from 'react-icons/si'; 

const About = () =>{
return(
        <section id="About" className='section'>
            <div className='flex flex-col gap-4'>
            <div className='section_title'>
                <h2>👩🏻‍💻 About</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm'>
                <div className='AboutMe'>
                    <h2> 🙂 About Me </h2>
                    <ul>
                        <li className='font-bold'> Name : 예이원</li>
                        <li className='font-bold'> Birth : 1999.12.23</li>
                    </ul>
                </div>
                <div className='AboutMe'>
                    <h2> 🎓  Education </h2>
                    <ul>
                    <li className='whitespace-pre-wrap leading-relaxed'>
                        <span className='Certificate'>2024.09.26</span>
                        그린컴퓨터아카데미 프로젝트기반 
                        <br/>
                        프론트엔드(React, Vue) 
                        <br/>
                        웹&앱 SW개발자 양성과정 15회차 수료
                    </li>
                    {/* <li className='whitespace-pre-wrap'>
                        <span className='Certificate'>2023.12.28</span>
                        KH정보교육원
                        (디지털컨버전스)공공데이터 융합 <br/> 자바개발자 양성과정 A30(9) 수료
                    </li> */}
                    <li><span className='Certificate'>2022.02</span>관광학과 졸업</li>
                </ul>
                </div>
                <div className='AboutMe'>
                    <h2>🧾 Certifications</h2>
                    <ul>
                        <li>
                            <span className='Certificate'> 2023.06.09</span>정보처리기사
                            
                            </li>
                        <li>
                            <span className='Certificate'> 2022.07.01 </span>  리눅스 마스터 2급</li>
                        <li> 
                            <span className='Certificate'> 2021.12.21 </span>  네트워크 관리사 2급
                        </li>
                        {/* <li> 
                            <span className='Certificate'> 2021.05.10 </span> 운전면허 2종 보통
                        </li> */}
                        <li> 
                            <span className='Certificate'> 2020.04.18 </span>  MOS
                        </li>
                    </ul>
                </div>
                <div className='AboutMe'>
                    <h2>📬 Online</h2>
                <ul>
                    <li>
                        <a href="mailto:4576874@naver.com" target="_blank" className="contactLink">
                        <SiNaver className="text-green-600 mr-2" size={12} /> 4576874@naver.com
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://github.com/yeyiwon" target="_blank" className="contactLink"><FaGithub className="dark:text-white text-black mr-2" size={16} /> GitHub
                        </a>
                    </li>
                    {/* <li>
                        <a href="https://velog.io/@yeyiwon/series" target="_blank" className="contactLink">
                        <SiVelog className="text-green-400 mr-2" size={16} /> Velog
                        </a>
                    </li> */}
                </ul>
                </div>
            </div>
            </div>
    
    </section>
)

}

export default About