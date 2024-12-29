import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import {
  EventNote,
  FitnessCenter,
  Wifi,
  LocalCafe,
  AttachMoney,
  WeekendOutlined,
  Speed,
  SportsSoccer
} from '@mui/icons-material';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title }) => (
  <Box className="flex flex-col items-center p-4">
    <Box className="text-yellow-500 mb-2">
      {icon}
    </Box>
    <Typography variant="subtitle2" className="text-center text-gray-700">
      {title}
    </Typography>
  </Box>
);

const Features: React.FC = () => {
  const features = [
    { icon: <EventNote fontSize="large" />, title: 'Community Events' },
    { icon: <FitnessCenter fontSize="large" />, title: 'Gym Facilities' },
    { icon: <Wifi fontSize="large" />, title: 'High-Speed WiFi' },
    { icon: <LocalCafe fontSize="large" />, title: 'Cafe & Tea Bar' },
    { icon: <AttachMoney fontSize="large" />, title: 'Affordable' },
    { icon: <WeekendOutlined fontSize="large" />, title: 'Comfort Lounges' },
    { icon: <Speed fontSize="large" />, title: 'Quick Booking' },
    { icon: <SportsSoccer fontSize="large" />, title: 'Sports Area' },
  ];

  return (
    <Box className="py-12 px-4">

      {/* Why Choose Us Section */}
      <Box className="max-w-6xl mx-auto">
        <Typography variant="h4" className="mb-8 font-bold">
          Why Choose us?
        </Typography>
        <Box 
          className="grid gap-4"
          sx={{
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)'
            }
          }}
        >
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};


export default Features;