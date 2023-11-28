import React from 'react';
import Typed from 'react-typed'

function Picas() {
    return (
      <div className='text-white max-w-[800px] mt-32 mx-auto ml-24'>
        <p className='text-sm font-semibold text-[#00df9a] mb-4'>Hello!</p>
        <div className='font-extrabold text-6xl mb-4'>I'm <span className='text-[#00df9a] mx-2'>Abhishek <br/> Fasate</span></div>
        <p className='font-semibold text-[30px]'>A freelance Web Dev</p>
        <div className='font-mono text-[#00df9a]'><Typed strings={['Javascript' , 'Django' , 'React' ,'Python']} typeSpeed={50} backSpeed={50} loop/></div>
      </div>
    );
  }

export default Picas;