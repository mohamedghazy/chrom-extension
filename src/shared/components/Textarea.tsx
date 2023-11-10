import React from 'react';

const Textarea = () => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Your bio</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-24"
        placeholder="Bio"
      ></textarea>
    </div>
  );
};

export default Textarea;
