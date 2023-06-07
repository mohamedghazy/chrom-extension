import React from 'react';
import './Popup.css';
import CreateRepeates from './components/CreateRepeates';
import { Route, Routes } from 'react-router-dom';

const Popup = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/popup.html" element={<CreateRepeates />} />
      </Routes>
    </div>
  );
};

export default Popup;
