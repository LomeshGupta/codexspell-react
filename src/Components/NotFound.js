import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"; // An icon for the error

const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        px: 3,
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 100, color: "grey.500", mb: 2 }} />
      <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="/"
        sx={{
          textTransform: "none",
        }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
