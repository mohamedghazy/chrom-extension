import React from 'react';
import CreateTask from './components/create_task/CreateTask';
import { Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
const Popup = () => {
  return (
    <div className="bg-primary absolute top-0 bottom-0 left-0 right-0 text-center h-full p-4 overflow-auto">
      <Routes>
        <Route path="/popup.html" element={<CreateTask />} />
        <Route path="/popup.html/task_list" element={<TaskList />} />
      </Routes>
    </div>
  );
};

export default Popup;
