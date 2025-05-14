import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Events = () => {
  return (
    <section className='events-section' id='Events'>
        <div className='event-container'>
           <div className='trainers-container'>
              <div className='trainers-header pt-10'>
                 <h1 className='section-heading section-heading-center' >Upcoming <span className='section-span'>Events</span></h1>
                    <p className='section-paragraph'>Stay active, stay motivated! At Fitness Guru, we love bringing the community together through fun and engaging fitness
                     events. Whether you're a seasoned athlete or just starting your fitness journey, our events offer something for everyone. Check out our upcoming events
                and be sure to join us!</p>
           </div>
         </div>

         <div className='flex flex-col justify-center items-center  md:gap-16  mt-6'>
        {/* Event 1 */}
        <motion.div
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 1.3, ease: 'easeOut' }}
           viewport={{ once: true, amount: 0.4 }}
        
        className='flex  p-10  flex-col md:flex-row  event-box  justify-between pb-6'>
          <div className='w-full md:w-1/3'>
            <img className='w-full  event-image' src={assets.healthwalk} alt="Health Walk" />
            
          </div>

          <div className='w-full event-description pl-15 md:w-2/3  mt-5 md:mt-0'>
            <div className='event-date event1'>
                <h2 className='text-6xl relative top-25 font-bold'>07</h2>
                <p className='relative top-10 ml-20 italic'>
                <span >Sat</span> <br />
                <span className='text-2xl font-bold'>Jun</span>
                </p>
            </div>
            <h2 className='text-4xl pl-40 font-bold event-detail-text'>
              Health Walk <span className='text-2xl font-light'> /Ayeduase</span>
            </h2>
            <button className='btns mt-4 h-12 w-32 ' id='event-btns'>
              Details
            </button>
          </div>
        </motion.div>

        {/* Event 2 */}
        <motion.div
        
        initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}

        className='flex  p-10  flex-col md:flex-row  event-box  justify-between pb-6'>
          <div className='w-full md:w-1/3'>
            <img className='w-full  event-image' src={assets.weightLifting} alt="Health Walk" />
            
          </div>

          <div className='w-full event-description pl-15 md:w-2/3  mt-5 md:mt-0'>
            <div className='event-date event1'>
                <h2 className='text-6xl relative top-25 font-bold'>21</h2>
                <p className='relative top-10 ml-20 italic'>
                <span >Sat</span> <br />
                <span className='text-2xl font-bold'>Jun</span>
                </p>
            </div>
            <h2 className='text-4xl pl-40 font-bold event-detail-text'>
              Weight Lifting Challenge <span className='text-2xl font-light'> /Ayeduase</span>
            </h2>
            <button className='btns mt-4 h-12 w-32 ' id='event-btns'>
              Details
            </button>
          </div>
        </motion.div>

        
{/* Event 3 */}
<motion.div
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.3, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.4 }}

className='flex  p-10  flex-col md:flex-row  event-box  justify-between pb-6'>
          <div className='w-full md:w-1/3'>
            <img className='w-full  event-image' src={assets.soccer} alt="Health Walk" />
            
          </div>

          <div className='w-full event-description pl-15 md:w-2/3  mt-5 md:mt-0'>
            <div className='event-date event1'>
                <h2 className='text-6xl relative top-25 font-bold'>05</h2>
                <p className='relative top-10 ml-20 italic'>
                <span >Sat</span> <br />
                <span className='text-2xl font-bold'>Jul</span>
                </p>
            </div>
            <h2 className='text-4xl pl-40 font-bold event-detail-text'>
              Games & Sports <span className='text-2xl font-light'> /Kotei</span>
            </h2>
            <button className='btns mt-4 h-12 w-32 ' id='event-btns'>
              Details
            </button>
          </div>
        </motion.div>
        </div>

       
        </div>
    </section>
  )
}

export default Events
