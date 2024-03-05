import React from 'react';
import Collapse from '../../../../shared/components/Collapse';
import SelectMenu from '../../../../shared/components/SelectMenu';

const CreateRepeatTask = () => {
  return (
    <div>
      <div className="mt-5 ">
        <Collapse
          content={
            <>
              <SelectMenu />
              <SelectMenu />
            </>
          }
          title="Repeate"
        />
      </div>
    </div>
  );
};

export default CreateRepeatTask;
