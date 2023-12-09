import React from 'react';
import SkillBar from './SkillBar';

function Skills() {
  return (
    <div id='skills' className="container mx-auto p-8">
      <section className="max-w-[800px] mx-auto mb-12">
        <h1 className="text-4xl text-white font-extrabold text-center mb-4">Professional Skills</h1>
        <p className="text-center text-white font-mono">
          As a skilled developer, I bring a diverse set of technical abilities to the table. My proficiency spans across various technologies, enabling me to deliver high-quality solutions. Below are some key areas of my expertise:
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        <SkillBar skill="HTML and CSS" percent={80} />
        <SkillBar skill="JavaScript" percent={90} />
        <SkillBar skill="React" percent={85} />
        <SkillBar skill="Python" percent={80} />
        <SkillBar skill="Cloud Services" percent={60} />
        <SkillBar skill="Automation Tooling" percent={95} />
      </section>

      <section className="max-w-[800px] mx-auto mt-12 text-white font-mono">
        <h2 className="text-2xl font-bold mb-4">Experience and Expertise</h2>
        <p className="text-white-700 font-mono">
          With a strong foundation in front-end development, I specialize in building interactive and user-friendly interfaces using React. Proficient in HTML and CSS, I leverage responsive design techniques to ensure a seamless user experience across diverse devices.
        </p>
        <p className="text-white-700 mt-4 font-mono">
          My back-end proficiency includes server-side logic development using Python frameworks like Flask. I actively contribute to projects using version control systems such as Git, ensuring collaborative and efficient development processes. My problem-solving mindset allows me to tackle complex challenges with creativity and precision.
        </p>
      </section>
    </div>
  );
}

export default Skills;
