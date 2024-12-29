import React, { useEffect } from "react";
import {
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import useSpaceStore from "../store/useSpaceStore";
import SpaceCard from './SpaceCard';
import type { Space } from "../types";

const SpaceListing: React.FC = () => {
  const { spaces, loading, error, fetchSpaces, setSelectedSpace } = useSpaceStore();

  useEffect(() => {
    fetchSpaces();
  }, [fetchSpaces]);

  if (loading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="text-center text-red-500 p-4">
        Error: {error}
      </Box>
    );
  }

  return (
    <Box className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <Typography variant="h4" className="mb-6 font-bold text-gray-800">
        Our Space Overview
      </Typography>

      {/* Grid Layout for Space Cards */}
      <Box
        className="grid gap-6"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {spaces.map((space: Space) => (
          <SpaceCard
            key={space.id}
            space={space}
            onSelect={(space) => setSelectedSpace(space)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SpaceListing;
