import React from 'react';

const Home = () => {
    return (
        <section>
            <div className='home_title'>
                <div className='profile_img'>
                    <img src="./images/Yeyiwon.png" alt="" />
                </div>
                <div>
                    <h1 className="text_gradient">
                        Ye2w PortFolio
                    </h1>
                    <p className='font-bold py-1 text-xl text-center sm:text-left' > 안녕하세요! 프론트엔드 개발자 예이원이라고합니다 </p>
                    <p className='text-sm text-center sm:text-left'>급변하는 기술의 시대 속에서, 항상 효율적인 코드를 작성하고 문제를 해결하면서, <br/>
                    더 나은 코딩 실력을 위해 끊임없이 배우고 도전하고 있습니다. 🙌🏻 </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
