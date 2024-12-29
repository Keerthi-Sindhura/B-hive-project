import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  Typography,
  Button,
  IconButton,
  Box,
  Stack
} from '@mui/material';
import { Close, LocationOn, AccessTime } from '@mui/icons-material';
import { Space } from '../types';

interface SpaceDetailsProps {
  space: Space;
  open: boolean;
  onClose: () => void;
}

const SpaceDetails: React.FC<SpaceDetailsProps> = ({ space, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle className="flex justify-between items-center">
        {space.name}
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          <Box>
            <img 
              src={space.images[0]} 
              alt={space.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </Box>

          <Box>
            <Stack spacing={2}>
              <Box className="flex items-center gap-2">
                <LocationOn color="action" />
                <Typography>{space.address}</Typography>
              </Box>
              <Box className="flex items-center gap-2">
                <AccessTime color="action" />
                <Typography>
                  {space.working_hours_start} - {space.working_hours_end}
                </Typography>
              </Box>
            </Stack>
          </Box>

          {space.amenities && space.amenities.length > 0 && (
            <Box>
              <Typography variant="h6" className="mb-2">
                Amenities
              </Typography>
              <Box className="flex flex-wrap gap-2">
                {space.amenities.map((amenity, index) => (
                  <Box 
                    key={`${amenity}-${index}`}
                    className="bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {amenity}
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          <Box>
            <Typography variant="h6" className="mb-2">
              Pricing
            </Typography>
            <Typography variant="h4" color="primary" className="mb-1">
              ₹{space.day_pass_price}/day
            </Typography>
            {space.day_pass_discounts_percentage['10']?.value > 0 && (
              <Typography className="text-green-600">
                {space.day_pass_discounts_percentage['10'].message}
              </Typography>
            )}
          </Box>

          <Box className="flex justify-end gap-2">
            <Button variant="outlined" onClick={onClose}>
              Close
            </Button>
            <Button 
              variant="contained" 
              className="bg-blue-600 hover:bg-blue-700"
            >
              Book Now
            </Button>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default SpaceDetails;