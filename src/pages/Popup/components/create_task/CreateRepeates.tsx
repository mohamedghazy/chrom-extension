import React from 'react';
import { Link } from 'react-router-dom';
import BackArrow from '../../../../assets/img/arrow-left.svg';
import settingIcon from '../../../../assets/img/settingIcon.svg';
import 'tailwindcss/base.css'; // Include base styles
import 'tailwindcss/components.css'; // Include component styles
import 'tailwindcss/utilities.css'; // Include utility style
import Inputs from '../../../../shared/components/Inputs';
import Textarea from '../../../../shared/components/Textarea';
import Collapse from '../../../../shared/components/Collapse';
import Swap from '../../../../shared/components/Swap';
import SelectMenu from '../../../../shared/components/SelectMenu';

const CreateRepeates = () => {
  return (
    <div className="flex flex-col h-full ">
      <div className="border-b-2 py-2 border-[#f0f0f0;] flex items-center justify-between w-full text-base text-[#1e1e1ec4] h-[10%]">
        <div className="flex items-center justify-between w-[30%]">
          <Link to="/popup.html/task_list">
            <img src={BackArrow} alt="back arrow" />
          </Link>
          <h4>New Task</h4>
        </div>
        <div className=" flex justify-between w-[20%] items-center">
          <Swap />
          <Link>
            <img src={settingIcon} alt="setting icon" />
          </Link>
        </div>
      </div>
      <div className="my-4">
        <Inputs />
        <Textarea />
        <div className="flex w-full justify-between max-w-xs">
          <Inputs />
          <Inputs />
        </div>
        <div className="mt-5">
          <Collapse component={<SelectMenu />} />
        </div>
        <button type="button" className="btn btn-wide btn-primary my-6">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateRepeates;
