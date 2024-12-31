import React from "react";
import { Box, Typography } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import Bubbles from "./Bubbles";

const NoBlogs = () => {
  return (
    <Box
      sx={{
        mt: 10,
        py: 10,
        my: 12,
        backgroundColor: "#fff",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "480px",
      }}
    >
      <Bubbles />
      <SentimentDissatisfiedIcon
        sx={{ fontSize: 80, color: "grey.500", mb: 2 }}
      />
      <Typography variant="h5" sx={{ mb: 1 }}>
        No Blogs Here
      </Typography>
      <Typography variant="body1" color="textSecondary">
        It seems like there are no blogs available at the moment.
      </Typography>
    </Box>
  );
};

export default NoBlogs;
