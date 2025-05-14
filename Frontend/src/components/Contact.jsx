import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className='contact-section overflow-x-hidden' id='Contact'>
          <div className='contact-container '>
                 <div className='conatact-header pt-10'>
                         <h1 className='section-heading section-heading-center' >Get <span className='section-span'>In Touch</span></h1>
                          <p className='section-paragraph'>Contact us if you need information</p>
                     </div>

                     <motion.div 
                         
                         initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}

                     className='contact-info-div flex items-center justify-center pt-15 gap-40 '>
                           <div className='contact-info'>
                              <img className='course-img contact-image' src={assets.location} alt="" />
                              <p className='pt-3'>252B, Kofi Annan Street  <br />
                                 Impact Building, Accra, Ghana</p>
                           </div>

                           <div className='contact-info'>
                               <img src={assets.contact} className='course-img contact-image' alt="" />
                               <p className='pt-3'> <a href="+233534236387"> 053 423 6387</a>  <br />
                                   <a href="+233201959367">020 195 9367</a>
                               </p>
                           </div>

                           <div className='contact-info justify-center' >
                               <img src={assets.globe} className='course-img contact-image mt-5' alt="" />
                               <p className='pt-3'>  <a href="mailto:elmago6225@gmail.com">fitnessguru@gmail.com</a> <br />
                                     <a href="">www.fitnessguru.com</a>

                               </p>
                           </div>
                </motion.div>

                <div className='form-map-container mt-10 justify-center flex gap-15 '>
                    <motion.div 
                       initial={{ x: -100, opacity: 0 }}
                       whileInView={{ x: 0, opacity: 1 }}
                       transition={{ duration: 1.3, ease: 'easeOut' }}
                       viewport={{ once: true, amount: 0.4 }}
                    
                     className='form  w-150  '>
                        <h1 className='font-bold'>Send Message</h1>
                         <p>If you need any information, feel free to send me message I will try to 
                        answer your and give you proper tips about your message</p>
                     <form action="" >
                       <div className='pt-10'>
                       <div className='flex gap-10'>
                       <input type="text" className='border  w-70 h-10  border-gray-300 input-field' required  placeholder='Name'/>
                       <input type="text" className='border w-70 h-10 border-gray-300 input-field' required placeholder='Email'/>
                       </div>
                       <textarea className='border mt-5 w-full h-60 border-gray-300 input-field' name="" id=""></textarea>
                       </div>

                       <button className='btns mt-5'>Submit</button>
                     </form>
                    </motion.div>

                     <motion.div 
                     
                     initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
              
                     className='map-container map-responsive'>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7916014503276!2d-1.5634920263721825!3d6.672724493322358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9462c61ac6a1%3A0x6e821527cb479c7a!2sMojo%201%20Gym!5e0!3m2!1sen!2sgh!4v1747056577923!5m2!1sen!2sgh" 
                     width="500" height="450" 
                     allowFullScreen
                      loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      title='Responsive Google Map'></iframe>
                     </motion.div>
                </div>
             </div>
    </section>
  )
}

export default Contact
