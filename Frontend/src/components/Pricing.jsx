import React from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
  return (
    <section className='pricing-section overflow-x-hidden mt-20 pb-15' id='Pricing'>
         <div className='price-section-container'>
            <div className='event-container'>
                <div className='trainers-container'>
                     <div className='trainers-header pt-10'>
                         <h1 className='section-heading section-heading-center' >Our <span className='section-span'>Membership Plan</span></h1>
                          <p className='section-paragraph'>We offer flexible membership options to suit your goals and lifestyle.</p>
                     </div>
                 </div>
              </div>

              <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              
              class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-center items-center gap-10 mt-20">
      <div class="pricingTable border-1 w-full md:w-80">
        <h3 class="title " id='title1'>Standard</h3>
        <div class="price-value " id='price-value-1'>
        ₵300
          <span class="month">/month</span>
        </div>
        <ul class="pricing-content">
            <li><span>✅</span> Home Workout Plan
      </li>
         <li><span>✅</span> 
         Standard Workout Plan
        </li>
        <li><span>✅</span>
         Access to 5 group classes per week</li>
        <li><span>✅</span> Access to Standard locker room and shower</li>
          <li> <span>✅</span>Access to 50% of gym equipment</li>
          <li> <span>✅</span>Access to general events</li>
          
        </ul>
        <div className='flex items-center justify-center  pb-8'>
        <button className="btns ">Sign up</button>
        </div>
      </div>

      <div class="pricingTable blue w-full md:w-80">
        <h3 class="title pro-title" id='title2'>PRO</h3>
        <div class="price-value" id='price-value-2'>
        ₵500
          <span class="month">/month</span>
        </div>
        <ul class="pricing-content">
        <li><span>✅</span> Home Workout Plan
      </li>
         <li><span>✅</span> 
         Standard Workout Plan
        </li>
        <li><span>✅</span>
        Access to 8 group classes per week</li>
        <li><span>✅</span> Access to Standard locker room and shower</li>
          <li> <span>✅</span>Access to 70% of gym equipment</li>
          <li> <span>✅</span>Access to exclusive events</li>
        </ul>
        <div className='flex items-center justify-center  pb-8'>
        <button className="btns ">Sign up</button>
        </div>     
     </div>

      <div class="pricingTable green w-full md:w-80">
        <h3 class="title" id='title1'>Premium</h3>
        <div class="price-value" id='price-value-3'>
        ₵750
          <span class="month">/month</span>
        </div>
        <ul class="pricing-content">
        <li><span>✅</span> Home Workout Plan
      </li>
         <li><span>✅</span> 
         Standard Workout Plan
        </li>
        <li><span>✅</span>
         Access to all group classes </li>
        <li><span>✅</span> Access to VIP locker room and shower</li>
          <li> <span>✅</span>Access to all gym equipment</li>
          <li> <span>✅</span>Access to all exclusive events</li>
        </ul>
        <div className='flex items-center justify-center  pb-8'>
        <button className="btns ">Sign up</button>
        </div>

      </div>
    </div>
  </motion.div>
        </div>
    </section>
  )
}

export default Pricing
