import React from 'react';
import { Box, Typography } from '@mui/material';



const Banner = () => {
  return (
    <Box 
        className="w-screen mx-auto mb-16"
        sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.5fr 1fr' },
            gap: 4,
            alignItems: 'center'
        }}
    >
        <Box className="relative w-full h-full">
          <Box 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 hidden md:block" 
            style={{ backgroundImage: "url('/media/bhive_back.png')" }}
          />
          {/* <Box className="absolute inset-0 bg-black bg-opacity-50 z-10" /> */}
          <Box className="relative z-20 p-8 h-fit top-1/2 -translate-y-1/2 transform hidden md:block"> {/* Content above the overlay */}
            <Typography variant="h3" className="mb-4 text-6xl font-bold text-black">
              Host your meeting with
            </Typography>
            <Typography variant="h3" className="mb-4 text-6xl font-bold text-black">
              world-class amenities.
            </Typography>
            <Typography variant="h3" className="mb-4 text-6xl font-bold text-black">
                Starting at <span className="text-yellow-500 text-6xl font-bold">₹199/-!</span>
            </Typography>
            
          </Box>
        </Box>
        <Box className="relative">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full rounded-lg"
                >
                  <source src="/media/gif.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            <Typography className="text-md text-center md:hidden max-w-[75%] m-auto">
                Host your meeting with world-class amenities. Starting at <span className="text-yellow-500 text-md font-bold">₹199/-!</span>
            </Typography>
        </Box>
    </Box>
  )
}

export default Banner