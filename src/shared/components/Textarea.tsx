import React from 'react';
import { InputProps } from './Inputs';

const Textarea: React.FC<Partial<InputProps>> = ({
  lable,
  placeholder,
  required,
  className,
}) => {
  return (
    <div className={`form-control ${className}`}>
      <label className="label">
        <span className="label-text text-base">{lable}</span>
      </label>
      <textarea
        className={`textarea textarea-bordered h-24  placeholder:text-xs p-2 bg-white border-slate-800 border-2 `}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
};

export default Textarea;
