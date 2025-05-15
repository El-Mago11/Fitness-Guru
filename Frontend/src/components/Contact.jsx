import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify';


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9729d79e-3b0f-443f-90cc-7d9d8aba2bd4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult();
    }
  };

  return (
    <section className='contact-section overflow-x-hidden' id='Contact'>
      <div className='contact-container'>
        <div className='conatact-header pt-10'>
          <h1 className='section-heading section-heading-center'>
            Get <span className='section-span'>In Touch</span>
          </h1>
          <p className='section-paragraph'>Contact us if you need information</p>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className='contact-info-div flex flex-col md:flex-row items-center justify-center pt-15 gap-10 md:gap-40 px-4 text-center md:text-left'
        >
          <div className='contact-info'>
            <img className='course-img contact-image' src={assets.location} alt="" />
            <p className='pt-3'>
              252B, Kofi Annan Street <br />
              Impact Building, Accra, Ghana
            </p>
          </div>

          <div className='contact-info'>
            <img src={assets.contact} className='course-img contact-image' alt="" />
            <p className='pt-3'>
              <a href="+233534236387">053 423 6387</a> <br />
              <a href="+233201959367">020 195 9367</a>
            </p>
          </div>

          <div className='contact-info justify-center'>
            <img src={assets.globe} className='course-img contact-image mt-5' alt="" />
            <p className='pt-3'>
              <a href="mailto:elmago6225@gmail.com">fitnessguru@gmail.com</a> <br />
              <a href="">www.fitnessguru.com</a>
            </p>
          </div>
        </motion.div>

        <div className='form-map-container mt-10 flex flex-col lg:flex-row justify-center gap-10 lg:gap-15 px-4'>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
            className='form w-full md:w-3/4 lg:w-1/2'
          >
            <h1 className='font-bold'>Send Message</h1>
            <p>
              If you need any information, feel free to send me message I will try to
              answer your and give you proper tips about your message
            </p>
            <form action="" onSubmit={onSubmit}>
              <div className='pt-10'>
                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                  <input
                    type="text"
                    className='border w-full md:w-1/2 h-10 border-gray-300 input-field'
                    required
                    placeholder='Name'
                  />
                  <input
                    type="text"
                    className='border w-full md:w-1/2 h-10 border-gray-300 input-field'
                    required
                    placeholder='Email'
                  />
                </div>
                <textarea
                  className='border mt-5 w-full h-60 border-gray-300 input-field'
                  name=""
                  id=""
                ></textarea>
              </div>
              <button className='btns mt-5'>
                {result ? result : "Submit"}</button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
            className='map-container map-responsive'
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7916014503276!2d-1.5634920263721825!3d6.672724493322358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9462c61ac6a1%3A0x6e821527cb479c7a!2sMojo%201%20Gym!5e0!3m2!1sen!2sgh!4v1747056577923!5m2!1sen!2sgh"
              width="500"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title='Responsive Google Map'
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
