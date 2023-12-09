import React from 'react';
import { IoCallOutline } from "react-icons/io5"
import { CiMail } from "react-icons/ci"
import { PiAddressBookDuotone } from "react-icons/pi"


function Contacts() {
  return (
    <div id='contact' className='w-full h-[650px] bg-black text-white'>
      <span className='flex justify-center m-5 text-2xl text-[#00df9a] font-extrabold'>CONTACT US</span>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-[400px] gap-8'>
        <div className='flex justify-center mt-[100px]'>
          <form action="https://formspree.io/f/mnqkkzvw" method='POST' className='w-full max-w-md'>
            <div className='mb-4'>
              <label htmlFor='UserName' className='block text-sm font-medium text-gray-400 mb-1'>Full Name</label>
              <input
                className='w-full px-3 py-2 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-[#00df9a]'
                type="text"
                name='username'
                placeholder='John Doe'
                autoComplete='off'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='Email' className='block text-sm font-medium text-gray-400 mb-1'>Email</label>
              <input
                className='w-full px-3 py-2 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-[#00df9a]'
                type="email"
                name='email'
                placeholder='john.doe@example.com'
                autoComplete='off'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-sm font-medium text-gray-400 mb-1'>Message</label>
              <textarea
                className='w-full px-3 py-2 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-[#00df9a]'
                name='message'
                cols={41}
                rows={5}
                placeholder='Type your message here...'
                autoComplete='off'
                required
              />
            </div>
            <div className='flex justify-center'>
              <button
                className='px-4 py-2 text-white bg-[#00df9a] rounded-md hover:bg-[#007f5f] focus:outline-none focus:ring focus:border-[#00df9a]'
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className='flex flex-col items-center justify-center text-center text-[#00df9a] font-serif'>
          <div className='flex items-center mb-4'>
              <CiMail size={20} className='mr-2' />
              <p className='text-white'>abhishekfasate@gmail.com</p>
          </div>

          <div className='flex items-center mb-4'>
              <IoCallOutline size={20} className='mr-2' />
              <p className='text-white'>+91 86698 64061</p>
          </div>

          <div className='flex items-center mb-4'>
              < PiAddressBookDuotone size={24} className='mr-2 mb-12' />
              <p className='text-white'>New Sangvi Pimpri Chinchwad,Pin-412213,Pune<br/>State-Maharshtra <br/> Country-India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
