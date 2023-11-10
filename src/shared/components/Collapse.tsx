import React from 'react';

const Collapse = ({ component }) => {
  return (
    <div className="collapse bg-slate-300 text-left text-[#505050] w-full max-w-xs">
      <input type="checkbox" />
      <div className="collapse-title text-lg font-medium">Reapet</div>
      <div className="collapse-content">{component}</div>
    </div>
  );
};

export default Collapse;
