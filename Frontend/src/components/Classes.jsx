import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion';


const Classes = () => {
  return (
    <section id='Classes' className='classes mt-15 '>
       <div className='classes-container section-container'>
        <div className='classes-header'>
           <h1 className='section-heading section-heading-center' >Our <span className='section-span'>Classes</span></h1>
           <p className='section-paragraph'>At Fitness Guru Gym, we offer a wide variety of classes to help you stay motivated, push your limits, and
             achieve your fitness goals. Whether you're looking to build strength, improve flexibility,
              or boost your endurance, we’ve got a class for you!</p>
        </div> 
        <div className='classes-offered mt-15'>
            <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
            className='flex justify-center class-group-1 gap-7'>
                <div className='class-box '>
                       <img src={assets.course9} className='course-img'  />
                     <div className='course-content'>
                           <h2>Body Building</h2>
                           <p>This course teaches the fundamentals of muscle growth, strength training techniques, and effective nutrition for bodybuilders.</p>
                           <p > <a className='read-more' href="">Read more &rarr;</a> </p>

                     </div>
                </div>
                <div className='class-box '>
                       <img src={assets.course2} className='course-img'  />
                     <div className='course-content'>
                           <h2>Weight Lifting</h2>
                           <p>Master weightlifting form, build muscle, boost strength, and train safely for instant results.</p>
                           <p > <a className='read-more' href="">Read more &rarr;</a> </p>

                     </div>
                </div>
                <div className='class-box '>
                       <img src={assets.course3} className='course-img' id='gymnatics' />
                     <div className='course-content'>
                           <h2>Gymnastics</h2>
                           <p>Learn gymnastics skills, improve flexibility, build strength, balance, coordination, and body control.</p>
                           <p> <a className='read-more' href="">Read more &rarr;</a> </p>

                     </div>
                </div>
            </motion.div>

            <motion.div
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 1.3, ease: 'easeOut' }}
               viewport={{ once: true, amount: 0.4 }}
            className='flex mt-10 pb-20 justify-center class-group-2 gap-7'>
            <div className='class-box '>
                       <img src={assets.course4} className='course-img'  />
                     <div className='course-content'>
                           <h2>Yoga</h2>
                           <p>Enhance flexibility, build strength, reduce stress, improve posture, and deepen mind-body connection</p>
                           <p > <a className='read-more' href="">Read more &rarr;</a> </p>

                     </div>
                </div>
                <div className='class-box '>
                       <img src={assets.course5} className='course-img'  />
                     <div className='course-content'>
                           <h2>Martial Arts</h2>
                           <p>Learn self-defense, build discipline, improve fitness, boost confidence, and master martial arts techniques.</p>
                           <p > <a className='read-more' href="">Read more &rarr;</a> </p>

                     </div>
                </div>
                <div className='class-box '>
                       <img src={assets.course7} className='course-img'  id='cardio'/>
                     <div className='course-content'>
                           <h2>Cardio</h2>
                           <p>Boost endurance, burn calories, improve heart health, increase energy, and enjoy dynamic cardio workouts</p>
                           <p > <a className='read-more' href="">Read more &rarr;</a> </p>

                     </div>
                </div>
            </motion.div>
        </div>
             <div className='flex flex-row relative bottom-10 justify-center items-center' >
             <button className='btns'>View More</button>

             </div>
        </div>
    </section>
  )
}

export default Classes
