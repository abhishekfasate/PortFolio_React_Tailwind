import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold ml-[30px] text-[#00df9a]'>Abhishek F.</h1>
      <ul className='hidden md:flex'>
           <li className="p-5 font-bold hover:border-b-2 hover:border-[#00df9a] transition-all duration-100">Home</li>
           <li className="p-5 font-bold hover:border-b-2 hover:border-[#00df9a] transition-all duration-100">About</li>
           <li className="p-5 font-bold hover:border-b-2 hover:border-[#00df9a] transition-all duration-100">Resume</li>
           <li className="p-5 font-bold hover:border-b-2 hover:border-[#00df9a] transition-all duration-100">Skills</li>
           <li className="p-5 font-bold hover:border-b-2 hover:border-[#00df9a] transition-all duration-100">Project</li>
           <li className="p-5 font-bold hover:border-b-2 hover:border-[#00df9a] transition-all duration-100">Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 text-center uppercase top-0 w-[45%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Abhishek F.</h1>
          <li className='p-4 font-bold border-b border-gray-600'>Home</li>
          <li className='p-4 font-bold  border-b border-gray-600'>About</li>
          <li className='p-4 font-bold border-b border-gray-600'>Resume</li>
          <li className='p-4 font-bold border-b border-gray-600'>Skills</li>
          <li className='p-4 font-bold border-b border-gray-600'>Project</li>
          <li className='p-4 font-bold '>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;