import React from 'react';

function About() {
  return (
    <div id='about' className='w-ful mt-[186px] py-0.5 relative overflow-hidden'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 text-black'>
        <img className='w-full h-auto object-cover md:opacity-100 opacity-50' src="avtar.png"
          alt="MY AVTAR IS LOADING..."
        />
        <div className='text-center max-md:absolute mt-[170px] sm:top-1/4'>
          <p className='font-extrabold text-white text-4xl pl-13 m-13'>
            About Me
          </p>
          <div className='text-sm text-white font-mono py-3 px-3'>
            Abhishek Fasate <br />
            <p className='p-4 text-align: justify; text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam, consequatur iure aperiam quam quibusdam iusto eos repellendus harum earum sapiente eveniet provident reiciendis repellat et, debitis aut natus ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;