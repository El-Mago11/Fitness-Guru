import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Events = () => {
  return (
    <section className='events-section' id='Events'>
      <div className='event-container'>
        <div className='trainers-container'>
          <div className='trainers-header pt-10'>
            <h1 className='section-heading section-heading-center'>
              Upcoming <span className='section-span'>Events</span>
            </h1>
            <p className='section-paragraph'>
              Stay active, stay motivated! At Fitness Guru, we love bringing the community together through fun and engaging fitness
              events. Whether you're a seasoned athlete or just starting your fitness journey, our events offer something for everyone. Check out our upcoming events
              and be sure to join us!
            </p>
          </div>
        </div>

        {/* Responsive container with spacing between cards on all screens */}
        <div className='flex flex-col justify-center items-center gap-10 md:gap-16 mt-6 w-full px-4'>

          {/* EVENT 1 */}
          <motion.div className='event-box w-full'>
            <div className='event-cards p-6 flex flex-col md:flex-row items-center gap-6 md:gap-10'>
              <div className='w-full md:w-1/3 flex-shrink-0 min-w-[200px]'>
                <img src={assets.healthwalk} alt="Health Walk" className='w-full h-auto object-cover rounded' />
              </div>

              <div className='flex flex-col sm:flex-row justify-center items-center sm:items-start sm:gap-10 text-center sm:text-left w-full'>
                <div className='flex flex-col justify-center items-center gap-6 mt-6 sm:mt-20'>
                  <div className='flex gap-3 justify-center items-center'>
                    <div><h2 className='text-5xl sm:text-6xl font-bold'>07</h2></div>
                    <div>
                      <span className='day-span italic'>Sat</span><br />
                      <span className='month-span text-2xl font-bold italic'>Jun</span>
                    </div>
                  </div>
                  <button className='btns'>Details</button>
                </div>

                <div className='mt-4 sm:mt-0'>
                  <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold event-detail-text'>
                    Health Walk <span className='text-xl sm:text-2xl font-light'> /Ayeduase</span>
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EVENT 2 */}
          <motion.div className='event-box w-full'>
            <div className='event-cards p-6 flex flex-col md:flex-row items-center gap-6 md:gap-10'>
              <div className='w-full md:w-1/3 flex-shrink-0 min-w-[200px]'>
                <img src={assets.weightLifting} alt="Weight Lifting" className='w-full h-auto object-cover rounded' />
              </div>

              <div className='flex flex-col sm:flex-row justify-center items-center sm:items-start sm:gap-10 text-center sm:text-left w-full'>
                <div className='flex flex-col justify-center items-center gap-6 mt-6 sm:mt-20'>
                  <div className='flex gap-3 justify-center items-center'>
                    <div><h2 className='text-5xl sm:text-6xl font-bold'>21</h2></div>
                    <div>
                      <span className='day-span italic'>Sat</span><br />
                      <span className='month-span text-2xl font-bold italic'>Jun</span>
                    </div>
                  </div>
                  <button className='btns'>Details</button>
                </div>

                <div className='mt-4 sm:mt-0'>
                  <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold event-detail-text'>
                    Weight Lifting Challenge <span className='text-xl sm:text-2xl font-light'> /Ayeduase</span>
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EVENT 3 */}
          <motion.div className='event-box w-full'>
            <div className='event-cards p-6 flex flex-col md:flex-row items-center gap-6 md:gap-10'>
              <div className='w-full md:w-1/3 flex-shrink-0 min-w-[200px]'>
                <img src={assets.soccer} alt="Games & Sports" className='w-full h-auto object-cover rounded' />
              </div>

              <div className='flex flex-col sm:flex-row justify-center items-center sm:items-start sm:gap-10 text-center sm:text-left w-full'>
                <div className='flex flex-col justify-center items-center gap-6 mt-6 sm:mt-20'>
                  <div className='flex gap-3 justify-center items-center'>
                    <div><h2 className='text-5xl sm:text-6xl font-bold'>05</h2></div>
                    <div>
                      <span className='day-span italic'>Sat</span><br />
                      <span className='month-span text-2xl font-bold italic'>Jul</span>
                    </div>
                  </div>
                  <button className='btns'>Details</button>
                </div>

                <div className='mt-4 sm:mt-0'>
                  <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold event-detail-text'>
                    Games & Sports <span className='text-xl sm:text-2xl font-light'> /Kotei</span>
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Events
