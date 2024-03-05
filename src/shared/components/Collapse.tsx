import React, { ReactNode } from 'react';
interface CollapseProps {
  content: string | ReactNode;
  title: string;
}
const Collapse: React.FC<Partial<CollapseProps>> = ({ title, content }) => {
  return (
    <div className="collapse  collapse-arrow  bg-slate-300 text-left text-[#505050] w-full overflow-auto ">
      <input type="checkbox" />
      <div className="collapse-title text-lg font-medium">{title}</div>
      <div className="collapse-content">{content}</div>
    </div>
  );
};

export default Collapse;
