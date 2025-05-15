import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,Navigation } from 'swiper/modules';
import 'swiper/css';
import { assets } from '../assets/assets'
import headerBg from '../assets/header-bg-img.webp';

const Home = () => {
  return (
   <section className='home-section'>
     <div
    id='Home'
    className="relative w-full h-screen bg-cover bg-center flex items-center justify-center bg-img"
    style={{
        backgroundSize: 'cover',
      backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat'
          
      }}
  >
    
    <div className='flex gap-100 '>
      <div></div>
       
    <div className="relative z-10 text-white bottom-4 swiper-container  max-w-3xl px-4 home-text left-0" >
       <Swiper
              className="custom-swiper-height"
         modules={[Autoplay, Navigation, Pagination]}
           autoplay={{ delay: 3000 }}
           loop={true}
         speed={800}
               slidesPerView={1}
         pagination={{ type: 'fraction' }}
            navigation={{
         nextEl: '.custom-next',
          prevEl: '.custom-prev',
              renderCustom: (swiper, current, total) => `${current} / ${total}`,
         }}
     >

        <SwiperSlide>
            <div className='home-carousel-text'>
                <h1 className="text-4xl font-bold carousel-h1">Welcome to Fitness Guru</h1>
                <p className='carousel-p'>Join us today and feel the difference. Build strength,
                     endurance, and confidence in an environment where you 
                     can thrive and reach your peak performance.</p>
                     <button className='btns'>Register Now</button>

            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className='home-carousel-text'>
             <h1 className="text-4xl font-bold carousel-h1">Unleash YOUR POTENTIAL</h1>
             <p className='carousel-p'>Transform your body, mind, and spirit. Start your fitness
                journey with personalized workouts, expert guidance, and a
                community that motivates you every step of the way.</p>
                <button className='btns'>Register Now</button>
             </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='home-carousel-text'>
            <h1 className="text-4xl font-bold carousel-h1">ACHIEVE YOUR GOALS FASTER</h1>
            <p className='carousel-p'>Whether you're a beginner or an athlete, we’ve got everything
               you need to level up. From cutting-edge equipment to dynamic
               classes, it’s time to push your limits.</p>
               <button className='btns'>Register Now</button>
            </div>
        </SwiperSlide>
      </Swiper>
    
     {/* Custom Fraction Indicator Below Swiper */}
     <div className="custom-swiper-indicator-container">
        </div>
    </div>
    </div>

  </div>
   </section>
);
};

export default Home
