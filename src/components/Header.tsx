import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" className="bg-white shadow-md">
      <Toolbar className="justify-between">
        <div className="conatiner flex items-center p-8 container mx-auto px-4 py-8">
          <Typography variant="h6" className="text-black">
              <img
                  src="/media/logo.png"
                  alt="Logo"
                  className="h-12"
                />
          </Typography>
        </div>
        <div className="flex gap-4">
          <Box className="p-4 border border-[#F2B304] rounded-lg">
              <img
                  src="/media/call.png"
                  alt="Call"
                  className="h-6"
                />
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;