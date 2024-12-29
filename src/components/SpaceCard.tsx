import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,

} from "@mui/material";
import type { Space } from "../types";

interface SpaceCardProps {
  space: Space;
  onSelect?: (space: Space) => void;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space, onSelect }) => {
  return (
    <Card
      className="relative h-full cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
      onClick={() => onSelect?.(space)}
    >
        {/* Title */}
        <Box className="flex justify-between items-center px-4 py-2">
                <Typography variant="h6" className="mb-2 font-bold basis-3/4">
                    {space.name}
                </Typography>
            {/* Distance overlay */}
            <Box className=" bg-white rounded-full px-2 py-1 shadow">
                <Typography variant="caption" className="text-gray-500">
                    {"6"} Kms
                </Typography>
            </Box>
        </Box>
        
      {/* Image with overlay elements */}
      <Box className="relative p-4">
        <CardMedia
          component="img"
          height="200"
          image={space.images[0]}
          alt={space.name}
          className="h-48 object-cover rounded-md"
        />
        {/* Tag overlay */}
        <Chip
          label={space.name || "Coworking"}
          className="absolute top-4 left-4 bg-yellow-600 text-white px-2 py-1 text-xs font-semibold"
        />
        
      </Box>

      {/* Content */}
      <CardContent className="p-4">

        {/* Pricing Section */}
        <Box className="flex justify-between items-center gap-3">
          {/* Day Pass */}
          <Box className="bg-gray-100 w-full rounded-md px-3 py-2">
            <Typography variant="h6" className="text-[12px] font-normal">
              Day pass
            </Typography>
            <Typography variant="h6" className="text-gray-900 font-bold">
              ₹{space.day_pass_price}<span className="text-[12px] font-normal">/day</span>
            </Typography>
          </Box>
          {/* Discount Message */}
          {space.day_pass_discounts_percentage["10"]?.value > 0 && (
            <>
                <Box className="relative w-full rounded-md bg-[#FFCF4B] text-black px-3 py-2">
                    <Typography variant="h6" className="text-[12px] font-normal">
                        Bulk pass
                    </Typography>
                    <Box 
                    className="absolute -top-3 bg-black text-white text-[7px] md:text-[8px] px-2 py-1 rounded-sm left-1/2 transform -translate-x-1/2">
                        {space.day_pass_discounts_percentage["10"]?.value}% discount
                    </Box>
                    <Typography variant="h6" className="text-black font-bold">
                        {space.day_pass_price * 10 * (1- 0.2) }<span className="text-[12px] font-normal">/10 days</span>
                    </Typography>
                </Box>
            </>
            
          )}
          
        </Box>
      </CardContent>
    </Card>
  );
};

export default SpaceCard;
