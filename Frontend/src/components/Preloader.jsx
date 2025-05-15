import React from 'react';
import { assets } from '../assets/assets';

const Preloader = ({ hide }) => {
  return (
    <div className={`preloader flex flex-col ${hide ? 'hide' : ''}`}>
      <div><img src={assets.preLoader} alt="Loading..." /></div>
        <div>       <p className='text-purple-700 '>Loading...</p></div>
    </div>
  );
};

export default Preloader;
