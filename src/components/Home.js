import React from 'react';
import { ReactTyped as Typed } from 'react-typed';


const Home = () => {
    return (
        <section className='section' id="Home">
            <div className='home_title'>
                <div className='profile_img'>
                    <img src="./images/Yeyiwon.png" alt="" />
                </div>
                <div>
                    <Typed
                        strings={['Ye2w PortFolio', 'Thank you for visiting!']} 
                        typeSpeed={70}
                        backSpeed={70}
                        loop
                        className="text_gradient"
                    />
                    <p className='font-bold py-1 text-xl whitespace-pre-wrap' > 
                    안녕하세요! 
                    프론트엔드 개발자 예이원이라고합니다 </p>
                    <p className='text-base whitespace-pre-wrap'>
                        {/* 급변하는 기술의 시대 속에서, 

                        항상 효율적인 코드를 작성하고 문제를 해결하기 위해, */}
                        더 나은 코딩 실력을 위해 끊임없이 배우고 도전하고 있습니다. 🙌🏻 </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
