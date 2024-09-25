import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri'; 
import { SiNaver } from 'react-icons/si'; 

const Home = () => {
    return (
        <section className='section' id="Home">
            <div className='home_title'>
                <div className='profile_img'>
                    <img src="./images/Yeyiwon.png" alt="" />
                </div>
                <div>
                    <h1 className="text_gradient">
                        Ye2w PortFolio
                    </h1>
                    <p className='font-bold py-1 text-xl text-center sm:text-left' > 안녕하세요! 프론트엔드 개발자 예이원이라고합니다 </p>
                    <p className='text-xs text-center sm:text-left'>급변하는 기술의 시대 속에서, 항상 효율적인 코드를 작성하고 문제를 해결하면서, <br/>
                    더 나은 코딩 실력을 위해 끊임없이 배우고 도전하고 있습니다. 🙌🏻 </p>
                </div>
            </div>
                <div id="About" className='flex flex-col gap-4'>
            <div className='section_title'>
                <h2>👩🏻‍💻 About Me</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <ul className='flex flex-col gap-2 p-4 shadow-md rounded-md'>
                    <h2 className='font-bold text-xl pb-2'> 👩🏻‍💻 Education </h2>
                    <li> Name : 예이원</li>
                    <li> Birth : 1999.12.23</li>
                    <li> Major : 관광학과 전공 </li>
                    <li> 프론트엔드 교육과정 수료 </li>
                </ul>

                
                <ul className='flex flex-col gap-2 p-4 shadow-md rounded-md'>
                    <h2 className='font-bold text-xl pb-2'>🧾 Certificate</h2>

                    <li>
                        <span className='Certificate'> 2023.06.09</span>정보처리기사
                        
                        </li>
                    <li>
                        <span className='Certificate'> 2022.07.01 </span>  리눅스 마스터 2급</li>
                    <li> 
                        <span className='Certificate'> 2021.12.21 </span>  네트워크 관리사 2급
                    </li>
                    <li> 
                        <span className='Certificate'> 2021.12.21 </span> 운전면허 2종
                    </li>
                    <li> 
                        <span className='Certificate'> 2021.12.21 </span>  mos
                    </li>
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
        </section>
    );
};

export default Home;
