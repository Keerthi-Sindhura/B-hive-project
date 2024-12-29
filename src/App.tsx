import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';

const App: React.FC = () => {

  return (
    <Box className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Box>
  );
};

export default App;