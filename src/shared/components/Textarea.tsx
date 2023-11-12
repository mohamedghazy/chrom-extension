import React from 'react';
import { InputProps } from './Inputs';

const Textarea: React.FC<Partial<InputProps>> = ({
  lable,
  placeholder,
  required,
  className,
}) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{lable}</span>
      </label>
      <textarea
        className={`textarea textarea-bordered h-24 ${className}`}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
};

export default Textarea;
