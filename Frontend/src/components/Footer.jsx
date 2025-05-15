import React from 'react'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <section className='footer-section '>
      <div className='footer-container pt-12 px-4'>
        <div className='card-box text-center '>
          <h1 className='section-heading section-heading-center'>
            Subscribe to <span className='section-span'>Our Newsletter</span>
          </h1>
          <div className="card-box-input flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <input type="text" placeholder="Your Email...." className="card-input" />
            <div className="input-img">
              <img src={assets.paperPlane} alt="" />
            </div>
          </div>
          <div className='card-box-content mt-8'>
            <p>Get latest updates for latest courses</p>
          </div>
        </div>

        <div className='footer-content pt-20 text-center'>
          <h2 className='uppercase font-bold'>FITness Guru</h2>
        </div>

        <div className='flex flex-wrap justify-center items-center px-2 mt-6'>
          <ul className='flex flex-wrap gap-4 sm:gap-6 md:gap-9 justify-center items-center footer-links text-sm sm:text-base'>
            <li><a href="#Home" className='footer-nav-links'>HOME</a></li>
            <li><a href="#About" className='footer-nav-links'>ABOUT</a></li>
            <li><a href="#Classes" className='footer-nav-links'>CLASSES</a></li>
            <li><a href="#Schedule" className='footer-nav-links'>SCHEDULE</a></li>
            <li><a href="#Trainers" className='footer-nav-links'>TRAINERS</a></li>
            <li><a href="#Events" className='footer-nav-links'>EVENT</a></li>
            <li><a href="#Pricing" className='footer-nav-links'>PRICING</a></li>
            <li><a href="#Blog" className='footer-nav-links'>BLOG</a></li>
            <li><a href="#Contact" className='footer-nav-links'>CONTACT</a></li>
          </ul>
        </div>

        <div className='flex other-links flex-col sm:flex-row gap-4 sm:gap-10 items-center justify-center mt-8 text-center sm:text-left'>
          <div className='flex items-center justify-center gap-2 call'>
            <FontAwesomeIcon className='fa-icon' icon={faPhone} />
            <a href="+233534236387" className='footer-nav-links'>053-423-6387</a>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <FontAwesomeIcon className='fa-icon' icon={faEnvelope} />
            <a href="mailto:elmago6225@gmail.com" className='footer-nav-links'>fitnessguru@gmail.com</a>
          </div>
        </div>

        <div className='copyright-section flex flex-col sm:flex-row items-center justify-between mt-10 sm:mt-20 px-4 gap-4 text-center'>
          <p>© 2025 El Mago All Rights Reserved</p>
          <ul className='flex flex-row gap-6 justify-center'>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faXTwitter} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faGoogle} /></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer
