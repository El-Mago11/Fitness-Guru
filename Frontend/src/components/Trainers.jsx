import React from 'react'
import { assets } from '../assets/assets'
import { faFacebook, faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Trainers = () => {
  return (
    <section className='trainers-section mt-10' id='Trainers'>
      <div className='trainers-container'>
         <div className='trainers-header pt-10'>
           <h1 className='section-heading section-heading-center' >Our <span className='section-span'>Trainers</span></h1>
            <p className='section-paragraph'>At Fitness Guru, we are proud to have a team of
                 passionate and experienced fitness professionals dedicated to helping you
                  achieve your health and fitness goals. Our trainers are not only certified but also 
                  committed to providing personalized coaching in a supportive and motivating environment.!</p>
         </div> 
         <motion.div 
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
         
         className='flex flex-wrap mt-10 items-center justify-center gap-10'>
          <div className="trainer-card ">
             <img src={assets.trainer3} className="trainer-image" alt="Trainer" />
              <div className="trainer-name-tag">
                  <h2>MANDY ROSE</h2>
              </div>
              <div className='trainer-image-description'>
                      <div className='trainer-info pt-2'>
                      <h2 className='trainer-name text-center font-bold'>MANDY ROSE</h2>
                        <p className='trainer-type text-center'>Cross-Fit Trainer</p>
                        <div className='border-t flex flex-row gap-10 justify-center mt-3 pt-1 pb-3 social-media-links-div'>
                        <FontAwesomeIcon 
                                       icon={faFacebook}
                                       className=' social-media-links mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faPhone}
                                       className=' social-media-links mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>                                        
                                       
                                        <FontAwesomeIcon 
                                       icon={faInstagram}
                                       className='social-media-links  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faTwitter}
                                       className='social-media-links  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>

                        </div>
                      </div>
                 
                        <div className='border-t social-media-links-div text-center pt-2 pb-2 view-profile'>
                            <a href="#">View profile</a>
                        </div>
                    </div>

            </div>

            <div className="trainer-card ">
             <img src={assets.trainer2} className="trainer-image" alt="Trainer" />
              <div className="trainer-name-tag">
                  <h2>SHAKA ZULU</h2>
              </div>
              <div className='trainer-image-description'>
                        <h2 className='trainer-name text-center font-bold'>Shaka Zulu</h2>
                        <p className='trainer-type text-center'>Body Building Trainer</p>
                        <div className='border-t flex flex-row gap-10  justify-center mt-3 pt-1 pb-3 social-media-links-div'>
                        <FontAwesomeIcon 
                                       icon={faFacebook}
                                       className=' social-media-links mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faPhone}
                                       className=' social-media-links mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>                                        
                                       
                                        <FontAwesomeIcon 
                                       icon={faInstagram}
                                       className='social-media-links  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faTwitter}
                                       className='social-media-links  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>

                        </div>
                        <div className='border-t social-media-links-div text-center pt-2 pb-2 view-profile'>
                            <a href="">View profile</a>
                        </div>
                    </div>

            </div>

            <div className="trainer-card ">
             <img src={assets.trainer1} className="trainer-image" alt="Trainer" />
              <div className="trainer-name-tag">
                  <h2>CHELSEA GREEN</h2>
              </div>
              <div className='trainer-image-description'>
                        <h2 className='trainer-name text-center font-bold'>Chelsea Green</h2>
                        <p className='trainer-type text-center'>Aerobics & Skipping Trainer</p>
                        <div className='border-t flex flex-row gap-10  justify-center mt-3 pt-1 pb-3 social-media-links-div'>
                        <FontAwesomeIcon 
                                       icon={faFacebook}
                                       className=' social-media-links mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faPhone}
                                       className=' social-media-links mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>                                        
                                       
                                        <FontAwesomeIcon 
                                       icon={faInstagram}
                                       className='social-media-links  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faTwitter}
                                       className='social-media-links  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>

                        </div>
                        <div className='border-t social-media-links-div text-center pt-2 pb-2 view-profile'>
                            <a href="">View profile</a>
                        </div>
                    </div>

            </div>
         </motion.div>
        
         <div className='flex flex-row relative bottom-10 justify-center items-center pt-20' >
             <button className='btns'>View More</button>

             </div>
             
      </div>
    </section>
  )
}

export default Trainers
