import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri'; 
import { SiNaver } from 'react-icons/si'; 

const About = () =>{
return(
        <div>

        <div id="About" className='flex flex-col gap-4'>
            <div className='section_title'>
                <h2>👩🏻‍💻 About Me</h2>
            </div>
            <div className='flex gap-6 flex-col sm:flex-row justify-between text-lg'>
                <ul className='flex flex-col gap-2 p-4 shadow-md rounded-md'>
                    <h2 className='font-bold text-xl pb-2'> 👩🏻‍💻  </h2>
                    <li>Name : 예이원</li>
                    <li> Birth : 1999.12.23</li>
                    <li> Major : 관광학과 전공 </li>
                </ul>

                
                <ul className='flex flex-col gap-2 p-4 shadow-md rounded-md'>
                    <h2 className='font-bold text-xl pb-2'>🧾 Certificate</h2>

                    <li>
                        <span className='Certificate'> 2023.06.09</span>정보처리기사
                        
                        </li>
                    <li>
                        <span className='Certificate'> 2022.07.01 </span>  리눅스 마스터 2급</li>
                    <li> 
                        <span className='Certificate'> 2021.12.21 </span>  네트워크 관리사 2급</li>
                </ul>
                    
                <ul className='flex flex-col gap-2 p-4 shadow-md rounded-md'>
                    <h2 className='font-bold text-xl pb-2'>📬 Contact</h2>
                    <li>
                        <a href="mailto:4576874@naver.com" className="contactLink">
                        <SiNaver className="text-green-600 mr-2" size={12} /> 4576874@naver.com
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/yeyiwon" className="contactLink"><FaGithub className="text-black mr-2" size={16} /> GitHub
                        </a>
                    </li>
                    <li>
                        <a href="" className="contactLink">
                        <RiKakaoTalkFill className="text-yellow-500 mr-2" size={16} /> 오픈 카카오톡
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    
    </div>
)

}

export default About