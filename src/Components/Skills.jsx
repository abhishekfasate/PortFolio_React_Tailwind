import React from 'react';
import SkillBar from './SkillBar';

function Skills() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 gap-8">
        <h1 className="text-3xl font-extrabold text-center mt-10 col-span-2">
          Skills
        </h1>
        <p className="text-center my-2 font-semibold py-2 col-span-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae id
          nobis doloremque quisquam maxime ipsam
        </p>
        <div className='text-center grid grid-cols-1 md:grid-cols-2 gap-8'>
          <SkillBar skill="HTML and CSS" percent={50} />
          <SkillBar skill="JavaScript" percent={70} />
          <SkillBar skill="React" percent={80} />
          <SkillBar skill="Python" percent={75} />
          <SkillBar skill="Cloud Services" percent={15} />
          <SkillBar skill="Automation Tooling" percent={90} />
        </div>
      </div>
      <div className='text-center py-[20px] border border-red-50'>
        <p className=' text-sm text-center font-semibold'>
          My expertise extends to front-end development with a 
          good command of React, where I've designed and implemented interactive user interfaces. <br/>
          I have a solid foundation in HTML and CSS, employing responsive design techniques to enhance 
          user experience across various devices.
          Backed by Python proficiency, I've developed server-side logic using frameworks like Flask.
          I've successfully contributed to projects utilizing version control systems like Git, 
          and I bring a problem-solving mindset to every development challenge.</p>
      </div>
    </div>
  );
}

export default Skills;
