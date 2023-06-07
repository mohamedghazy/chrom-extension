import React from 'react';
import '../Popup.css';
const CreateRepeates = () => {
  return (
    <form>
      <div className="App-header">
        <h4>Hello To Repeate</h4>
        <input
          type="text"
          name="task"
          className="task"
          placeholder="what you need to repeate?"
        />
      </div>
      <div className="repeate">
        <input
          type="number"
          name="task"
          className="repeate_field"
          placeholder="repeate every...."
        />
        <span>mintus</span>
      </div>
      <input
        type="submit"
        name="submit"
        placeholder="Reapte"
        className="submit_Btn"
      />
    </form>
  );
};

export default CreateRepeates;
