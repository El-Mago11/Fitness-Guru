import React from 'react'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  return (
    <section className='footer-section  '>
        <div className='footer-container pt-12'>
            <div className='card-box'>
                  <h1 className='section-heading section-heading-center' >Subscribe to <span className='section-span'>Our Newsletter</span></h1>
                  <div class="card-box-input">
                    <input type="text"  placeholder="Your Email...." class="card-input" />
                   
                       <div className="input-img">
                        <img src={assets.paperPlane} alt="" />
                    
                           </div>
                           <div className='card-box-content mt-8'> 
                                   <p>Get latest updates for latest courses</p>
                           </div>
            </div>      
 
            </div>

              <div className='footer-content pt-20' > 
                    <h2 className='uppercase font-bold'>FITness Guru</h2>
              </div>
              <div className='flex justify-center items-center'>
                <ul className='flex flex-row gap-9 justify-center items-center  footer-links '>
                    <li > 
                    <a href="#Home" className='footer-nav-links'>
                   HOME
                   </a>
                    </li>
                    <li><a href="#About" className='footer-nav-links'>ABOUT</a>
                    </li>
                    <li>
                      <a href="#Classes" className='footer-nav-links'>CLASSES</a>
                    </li>
                    <li>
                      <a href="#Schedule" className='footer-nav-links'>SCHEDULE</a>
                    </li>
                    <li>
                      <a href="#Trainers" className='footer-nav-links'>TRAINERS</a>
                    </li>
                    <li>
                      <a href="#Events" className='footer-nav-links'>EVENT</a>
                    </li>
                    <li>
                      <a href="#Pricing" className='footer-nav-links'>PRICING</a>
                    </li>
                    <li>
                      <a href="#Blog" className='footer-nav-links'>BLOG</a>
                    </li>
                    <li>
                      <a href="#Contact" className='footer-nav-links'>CONTACT</a>
                    </li>
                </ul>
              </div>

              <div className=' flex gap-10 items-center justify-center'>
                 <div className='flex items-center justify-center gap-2'>
                 <FontAwesomeIcon className='fa-icon' icon={faPhone} />
                   <div><a href="+233534236387" className='footer-nav-links'> 053-423-6387</a></div>
                 </div>
                  <div className='flex items-center justify-center gap-2'>
                  <FontAwesomeIcon className='fa-icon' icon={faEnvelope} />
                     <div>
                     <a href="mailto:elmago6225@gmail.com" className='footer-nav-links'>fitnessguru@gmail.com</a>
                     </div>
                  </div>

              </div>
              
              <div className='copyright-section w-fit  items-center justify-center mt-20 flex gap-170 flex-row'>
                  <div><p>© 2025 El Mago All Rights Reserved</p></div>
                <div className='flex'>
                    <ul className='flex flex-row gap-8'>
                        <li >
                        <FontAwesomeIcon icon={faFacebook} />
                        </li>

                        <li >
                        <FontAwesomeIcon icon={faXTwitter} />
                        </li>

                        <li >
                        <FontAwesomeIcon icon={faInstagram} />
                        </li>

                        <li >
                        <FontAwesomeIcon icon={faGoogle} />
                        </li>
                    </ul>
                </div>
              </div>
        </div>
    </section>
  )
}

export default Footer
