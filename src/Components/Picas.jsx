import React from 'react';
import Typed from 'react-typed';

function DevBox() {
  return(
    <div className='text-[#00df9a] text-center mt-14 p-10 text-3xl font-bold'>
        Developer | Automation Engineer | FrameWork Developer |
    </div>
  )
}



function Picas() {
  return (
    <>
    <div className="text-white max-w-[800px] mt-32  ml-24 h-[28vh]">
      <p className="text-sm font-semibold text-[#00df9a] mb-2">Greetings!</p>
      <div className="font-extrabold text-6xl mb-4">
        I'm <span className="text-[#00df9a] mx-2">Abhishek Fasate</span>
      </div>
      <p className="font-semibold text-2xl mb-6">Freelance Web Developer</p>
      <div className="font-mono text-[#00df9a] mb-8">
        <Typed strings={['JavaScript', 'Django', 'React', 'Python']} typeSpeed={50} backSpeed={50} loop />
      </div>
    </div>
        <DevBox/>
    </>
  );
}

export default Picas;