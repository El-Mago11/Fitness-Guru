import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("MONDAY");

  const scheduleData = {
    MONDAY: [
      { time: "08AM - 10AM", title: "Weight Loss", trainer: "Ndame Tshabalala", img: assets.weightLoss },
      { time: "08AM - 10AM", title: "Advanced Gymnastics", trainer: "Ember Moon", img: assets.course3 },
      { time: "11AM - 01PM", title: "Fitness", trainer: "Sub Zero", img: assets.course6 },
      { time: "02PM - 04PM", title: "Martial Arts", trainer: "Shinsuke Nagamoto", img: assets.course5 },
      { time: "05PM - 07PM", title: "Yoga", trainer: "Jane Foster", img: assets.yoga },
      { time: "05PM - 07PM", title: "Body Building", trainer: "Shaka Zulu", img: assets.bodyBuilding },
    ],
    TUESDAY: [
      { time: "08AM - 10AM", title: "Fitness", trainer: "Sub Zero", img: assets.course6 },
      { time: "08AM - 10AM", title: "Body Building", trainer: "Shaka Zulu", img: assets.bodyBuilding },
      { time: "11AM - 01PM", title: "Cross Fit", trainer: "Mandy Rose", img: assets.crossFit },
      { time: "02PM - 04PM", title: "Advanced Gymnastics", trainer: "Ember Moon", img: assets.course3 },
      { time: "05PM - 07PM", title: "Cardio", trainer: "Bruce Wayne", img: assets.course7 },
    ],
    WEDNESDAY: [
      { time: "08AM - 10AM", title: "Cardio", trainer: "Bruce Wayne", img: assets.course7 },
      { time: "11AM - 01PM", title: "Cross Fit", trainer: "Mandy Rose", img: assets.crossFit },
      { time: "02PM - 04PM", title: "Fitness", trainer: "Sub Zero", img: assets.course6 },
      { time: "05PM - 07PM", title: "Karate", trainer: "Shinsuke Nagamoto", img: assets.karate },
      { time: "05PM - 07PM", title: "Boxing", trainer: "Bukom Banku", img: assets.boxing },
    ],
    THURSDAY: [
      { time: "08AM - 10AM", title: "Weight Loss", trainer: "Ndame Tshabalala", img: assets.weightLoss },
      { time: "11AM - 01PM", title: "Fitness", trainer: "Sub Zero", img: assets.course6 },
      { time: "02PM - 04PM", title: "Martial Arts", trainer: "Shinsuke Nagamoto", img: assets.course5 },
      { time: "05PM - 07PM", title: "Cardio", trainer: "Bruce Wayne", img: assets.course7 },
      { time: "05PM - 07PM", title: "Cross Fit", trainer: "Mandy Rose", img: assets.crossFit },
    ],
    FRIDAY: [
      { time: "04PM - 06PM", title: "Recovery", trainer: "Dr Kate Scott", img: assets.course4 },
      { time: "08PM - 10PM", title: "Aerobics & Skipping", trainer: "Chelsea Green", img: assets.aerobics },
      { time: "11AM - 01PM", title: "Fitness", trainer: "Sub Zero", img: assets.course6 },
      { time: "02PM - 04PM", title: "Martial Arts", trainer: "Shinsuke Nagamoto", img: assets.course5 },
      { time: "05PM - 07PM", title: "Boxing", trainer: "Bukom Banku", img: assets.boxing },
    ],
    SATURDAY: [
      { time: "08PM - 10PM", title: "Yoga", trainer: "Jane Foster", img: assets.course8 },
      { time: "08PM - 10PM", title: "Aerobics & Skipping", trainer: "Chelsea Green", img: assets.aerobics },
      { time: "11AM - 01PM", title: "Karate", trainer: "Shinsuke Nagamoto", img: assets.karate },
      { time: "11AM - 01PM", title: "Advanced Gymnastics", trainer: "Ember Moon", img: assets.course3 },
      { time: "02PM - 04PM", title: "Body Building", trainer: "Shaka Zulu", img: assets.bodyBuilding },
      { time: "02PM - 04PM", title: "Fitness", trainer: "Sub Zero", img: assets.course6 },
      { time: "05PM - 07PM", title: "Weight Loss", trainer: "Ndame Tshabalala", img: assets.weightLoss },
      { time: "05PM - 07PM", title: "Recovery", trainer: "Dr Kate Scott", img: assets.course4 },
    ],
    SUNDAY: [
      { time: "02PM - 04PM", title: "Cross Fit", trainer: "Mandy Rose", img: assets.crossFit },
      { time: "02PM - 04PM", title: "Karate", trainer: "Shinsuke Nagamoto", img: assets.karate },
      { time: "05PM - 07PM", title: "Body Building", trainer: "Shaka Zulu", img: assets.bodyBuilding },
      { time: "05PM - 07PM", title: "Recovery", trainer: "Dr Kate Scott", img: assets.course4 },
    ],
  };

  const days = Object.keys(scheduleData);

  return (
    <section id="Schedule">
      <div className="section-container">

        {/* Header */}
        <div className="schedule-header">
          <h1 className="section-heading section-heading-center">
            Our <span className="section-span">Schedule</span>
          </h1>
          <p className="section-paragraph">
            At Fitness Guru Gym, we offer a wide variety of classes to help
            you stay motivated, push your limits, and achieve your fitness goals.
            Whether you're looking to build strength, improve flexibility, or boost
            your endurance, we’ve got a class for you!
          </p>
        </div>

        {/* Scrollable Tabs - scrollable on mobile, centered on desktop */}
        <motion.div 
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
           id="myBtnContainer" className="nav flex flex-row mt-10 items-center justify-center nav-pills mb-3"
        >
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex w-max md:w-full md:justify-center gap-4 px-2">
              {days.map((day) => (
                <button
                  key={day}
                  className={`btn whitespace-nowrap px-4 py-2 rounded-md border ${
                    selectedDay === day ? "bg-[#d84cc7] text-white" : "text-gray-600"
                  }`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day.charAt(0) + day.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Schedule Cards */}
        <motion.div 
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-10 schedule-container"
        >
          {scheduleData[selectedDay].map((item, index) => (
            <div key={index} className="overflow-hidden schedule-box">
              <img src={item.img} alt={item.title} className="course-img pt-2" />
              <div className="p-4 text-center">
                <div className='flex justify-center time-box'>
                  <p className="text-xs text-gray-500 time">{item.time}</p>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 pt-4">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.trainer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
