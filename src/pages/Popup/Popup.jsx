import React from 'react';
import CreateRepeates from './components/create_task/CreateRepeates';
import { Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
const Popup = () => {
  return (
    <div className="bg-primary absolute top-0 bottom-0 left-0 right-0 text-center h-full p-4 overflow-auto">
      <Routes>
        <Route path="/popup.html" element={<CreateRepeates />} />
        <Route path="/popup.html/task_list" element={<TaskList />} />
      </Routes>
    </div>
  );
};

export default Popup;
