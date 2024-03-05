import React, { ReactNode } from 'react';
export interface InputProps {
  lable: string;
  placeholder: string;
  icon: ReactNode;
  type: string;
  required: boolean;
  className: string;
}
const Inputs: React.FC<Partial<InputProps>> = ({
  lable,
  placeholder,
  icon,
  required,
  className,
  type,
}) => {
  return (
    <div className={`form-control   ${className}`}>
      <div className="label">
        <span className="label-text text-base">{lable}</span>
      </div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className={`input input-bordered w-full   placeholder:text-xs bg-white border-slate-800 border-2 `}
        />
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inputs;
