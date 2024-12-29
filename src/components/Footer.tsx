import { Typography, Box, Card } from '@mui/material';
import React from 'react';


const Footer: React.FC = () => {
  return (
    <>
    <Box className="bg-gray-50 py-8">
        <Typography className='text-5xl mb-[150px] text-gray-500 font-bold'>
            Download our app now 
        </Typography>
      <Box className="container mx-auto relative">
        {/* Top Section */}
        {/* Left Section (App Previews) */}
        <Box className="flex items-center gap-4 absolute bottom-0 left-0">
            <img
              src="/media/footer-image.png"
              alt="App Preview 1"
              className="h-60 w-auto transform scale-150 origin-bottom-left"
            />
          </Box>
        <Card className="flex flex-col p-20 md:flex-row items-baseline md:items-start justify-between transition-shadow rounded-xl">
          <Box></Box>
          {/* Right Section (Description and Download Buttons) */}
          <Box className="mt-6 md:mt-0 md:text-left text-center basis-2/4">
            <p className="text-gray-700 text-sm mb-6">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <Box className="flex justify-center md:justify-start gap-4">
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="/media/google-store.png"
                  alt="Google Play"
                  className="h-12"
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/media/apple-store.png"
                  alt="App Store"
                  className="h-12"
                />
              </a>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  </>
  );
};

export default Footer;
