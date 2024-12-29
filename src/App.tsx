import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Header from './components/Header';
import Banner from './components/Banner';
import SpaceListing from './components/SpaceListing';
import Features from './components/Features';
import SpaceDetails from './components/SpaceDetails';
import useSpaceStore from './store/useSpaceStore';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { selectedSpace, setSelectedSpace } = useSpaceStore();

  return (
    <Box className="min-h-screen bg-gray-50">
      <Stack spacing={0}>
        <Header />
        <Banner />
        <Box 
          component="main" 
          className="flex-1"
          sx={{
            px: { xs: 2, sm: 4 },
            py: { xs: 4, sm: 6 },
            maxWidth: 'lg',
            mx: 'auto',
            width: '100%'
          }}
        >
          <Routes>
            <Route 
              path="/" 
              element={
                <Stack spacing={6}>
                  <Features />
                  <SpaceListing />
                </Stack>
              } 
            />
            <Route 
              path="/spaces/:id" 
              element={
                <Box sx={{ maxWidth: 'md', mx: 'auto', width: '100%' }}>
                  <SpaceDetails 
                    space={selectedSpace!}
                    open={Boolean(selectedSpace)}
                    onClose={() => setSelectedSpace(null)}
                  />
                </Box>
              } 
            />
          </Routes>
          <Footer />
        </Box>
        
      </Stack>

      {/* Modal for space details */}
      {selectedSpace && (
        <SpaceDetails
          space={selectedSpace}
          open={Boolean(selectedSpace)}
          onClose={() => setSelectedSpace(null)}
        />
      )}
      <Box className="mt-8 w-screen border-t bg-[#222E34] border-gray-300 text-center text-sm text-white p-4">
        © Copyright 2024. Bhive Private Limited
      </Box>
    </Box>
  );
};

export default App;