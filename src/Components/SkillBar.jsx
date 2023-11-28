import React from 'react';

const SkillBar = ({ skill, percent }) => {
  return (
 <div className="mb-4">
  <div className="sm:flex sm:flex-col md:grid items-center">
    <div className="mb-3 font-semibold text-xl">{skill}</div>
    <div className="ml-2 flex items-center bg-gray-300 h-3 rounded-full relative">
      <div
        className="h-full rounded-full bg-green-500 absolute"
        style={{ width: `${percent}%` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
        {percent}%
      </div>
    </div>
  </div>
</div>
  );
};

export default SkillBar;
