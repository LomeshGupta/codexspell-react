import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Fab,
  useMediaQuery,
} from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { useTheme } from "@mui/system";
import blogsData from "./blogs.json"; // Replace with the path to your JSON file
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const BLOGS_TO_SHOW = 3;
  const TRANSITION_DURATION = 500; // Transition duration in ms
  const AUTO_SCROLL_INTERVAL = 3000; // Auto scroll interval in ms

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setCurrentBlogs(blogsData.slice(0, BLOGS_TO_SHOW));
  }, []);

  // Function to update blogs with animation
  const updateBlogs = (newIndex) => {
    const endIndex = (newIndex + BLOGS_TO_SHOW) % blogsData.length;

    setTransitioning(true);

    setTimeout(() => {
      if (endIndex > newIndex) {
        setCurrentBlogs(blogsData.slice(newIndex, endIndex));
      } else {
        setCurrentBlogs([
          ...blogsData.slice(newIndex),
          ...blogsData.slice(0, endIndex),
        ]);
      }

      setTransitioning(false);
      setStartIndex(newIndex);
    }, TRANSITION_DURATION);
  };

  // Next and Previous handlers
  const handleNext = () => {
    const newIndex = (startIndex + 1) % blogsData.length;
    updateBlogs(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = (startIndex - 1 + blogsData.length) % blogsData.length; // Wrap around to last
    updateBlogs(newIndex);
  };

  // Auto-scrolling logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [startIndex]);

  return (
    <Grid
      container
      spacing={4}
      sx={{
        px: isMobile ? 2 : 14,
        marginTop: isMobile ? "20%" : 0,
        alignItems: "flex-start",
      }}
    >
      {/* Left Section */}
      <Grid item xs={12} md={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          What’s New?
        </Typography>
        <Typography variant="body1">
          Where creator share his personal <strong>voice</strong> and{" "}
          <strong>writing</strong> on any topics.{" "}
          <Link
            to="/blogs"
            style={{ textDecoration: "none", color: "#1976d2" }}
          >
            <strong>Find More →</strong>
          </Link>
        </Typography>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={8}>
        <Box position="relative">
          {/* Blogs */}
          <Box
            sx={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? "translateY(20px)" : "translateY(0)",
              transition: `all ${TRANSITION_DURATION}ms ease-in-out`,
            }}
          >
            {currentBlogs.map((blog) => (
              <Box
                key={blog.id}
                sx={{
                  borderBottom: "1px solid #ddd",
                  paddingY: 2,
                }}
              >
                <Typography variant="caption" color="textSecondary">
                  {blog.date}
                </Typography>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {blog.description}
                </Typography>
                <Button size="small">Learn More</Button>
              </Box>
            ))}
          </Box>

          {/* Sticky Navigation Buttons */}
          <Box
            sx={{
              position: "sticky",
              bottom: 16,
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end",
              gap: 2,
              zIndex: 10,
              padding: isMobile ? 2 : 0,
              backgroundColor: isMobile
                ? "rgba(255, 255, 255, 0.9)"
                : "transparent",
            }}
          >
            <Fab
              color="primary"
              size="small"
              onClick={handlePrevious}
              aria-label="Previous"
            >
              <ArrowUpward />
            </Fab>
            <Fab
              color="primary"
              size="small"
              onClick={handleNext}
              aria-label="Next"
            >
              <ArrowDownward />
            </Fab>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BlogSection;
