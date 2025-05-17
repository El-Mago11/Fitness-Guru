import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <section className='about-section overflow-x-hidden' id='About'>
        <div className='about-container section-container flex gap-9'>
           <motion.div          
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.3, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.4 }}
           
           className='about-us'>
           <h1 className='section-heading'>About <span className='section-span'>US</span></h1>
            <p className='about-paragraph'>
            At Fitness Guru, we believe in empowering individuals to achieve
             their personal best. Our space blends expert training, supportive 
             community, and tailored programs to meet diverse fitness goals. 
             With a focus on strength, balance, and well-being, we help you 
             move with purpose and confidence every day.

             <br /><br />
             Whether you're just starting your journey or aiming to reach new
              milestones, our team is here to guide you every step of the way.
               From dynamic group classes to one-on-one coaching, we provide 
               the tools, motivation, and environment you need to thrive — 
               both inside and outside the gym.
            </p>

              <Link to='/about-us'>             <button className='btns mt-10'>Read More</button></Link>
           </motion.div>
           <motion.div         
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4}}
           >
              <img src={assets.aboutImage} alt="" />
           </motion.div>
        </div>
    </section>
  )
}

export default About
