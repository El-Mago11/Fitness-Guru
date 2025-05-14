import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <section className='blog-section overflow-x-hidden' id='Blog'>
       <div className='blog-container'>
       <div className='blog-header pt-10'>
                 <h1 className='section-heading section-heading-center' >Our <span className='section-span'>Blog</span></h1>
                    <p className='section-paragraph'>At Fitness Guru, we’re here to keep you inspired, informed, and energized. From
                       workout tips and wellness advice to motivational stories and healthy living hacks, our blog is your go-to source 
                       for all things fitness. No matter where you are on your journey, we’re with you every step of the way.</p>
           </div>

         <motion.div 

initial={{ x: -100, opacity: 0 }}
whileInView={{ x: 0, opacity: 1 }}
transition={{ duration: 1.3, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.4 }}
         
         className='blog-section-content flex flex-wrap justify-center  mt-15'>
         <div className='  mb-10 blog-box  w-92 '>
                 <div className='blog-img'>
                  <a href="">
                    <img src={assets.blog2} alt="" className='w-auto h-auto'/>
                  </a>
                 </div>

                 <div className='blog-content '>
                     <p className='blog-date text-center pt-9'>May 14 By Admin</p>
                     <h2 className='blog-title pt-3  text-center'>New Fitness Guru Course</h2>
                     <p  className='w-fit blog-text  pt-3 text-center pl-5 pr-5'>Ready to level up your fitness journey? Our latest course is designed
                       to help you build strength, boost energy, and stay motivated — no matter
                        your fitness level. Join now and take the first step toward a healthier, stronger you!</p>
                    
                 </div>
                 <div className='blog-link text-center pt-5 pb-7'> <a href="" className='blog-read-more'>READ MORE &rarr; </a></div>
              </div>

              <div className=' ml-6 mb-10 blog-box inline-block w-92 '>
                 <div className='blog-img'>
                  <a href="">
                    <img src={assets.blog1} alt="" className='w-auto h-auto'/>
                  </a>
                 </div>

                 <div className='blog-content '>
                     <p className='blog-date text-center pt-9'>May 14 By Admin</p>
                     <h2 className='blog-title pt-3  text-center'>New Fitness Guru Course</h2>
                     <p  className='w-fit blog-text  pt-3 text-center pl-5 pr-5'>Ready to level up your fitness journey? Our latest course is designed
                       to help you build strength, boost energy, and stay motivated — no matter
                        your fitness level. Join now and take the first step toward a healthier, stronger you!</p>
                    
                 </div>
                 <div className='blog-link text-center pt-5 pb-7'> <a href="" className='blog-read-more'>READ MORE &rarr;</a></div>
              </div>

              <div className=' ml-6 mb-10 blog-box inline-block w-92 '>
                 <div className='blog-img'>
                  <a href="">
                    <img src={assets.blog3} alt="" className='w-auto h-auto'/>
                  </a>
                 </div>

                 <div className='blog-content '>
                     <p className='blog-date text-center pt-9'>May 14 By Admin</p>
                     <h2 className='blog-title pt-3  text-center'>New Fitness Guru Course</h2>
                     <p  className='w-fit blog-text  pt-3 text-center pl-5 pr-5'>Ready to level up your fitness journey? Our latest course is designed
                       to help you build strength, boost energy, and stay motivated — no matter
                        your fitness level. Join now and take the first step toward a healthier, stronger you!</p>
                    
                 </div>
                 <div className='blog-link text-center pt-5 pb-7'> <a href="" className='blog-read-more'>READ MORE &rarr;</a></div>
              </div>

          </motion.div>    
              
          <div className='flex flex-row relative bottom-10 justify-center items-center pt-20' >
             <button className='btns'>View More</button>

             </div>
          
       </div>
    </section>
  )
}

export default Blog
