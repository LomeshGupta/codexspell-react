import React, { useState } from "react";
import { Box, Typography, Button, TextField, Snackbar } from "@mui/material";
import { useInView } from "react-intersection-observer";
import bg2 from "../Assets/bg2.jpg";

const NewsletterSignup = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
    triggerOnce: true, // Only trigger once
  });

  const [email, setEmail] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (email) {
      // Simulate form submission
      console.log("Email submitted:", email);
      setOpenSnackbar(true);
      setEmail(""); // Clear the input field after submission
    }
  };

  return (
    <Box marginTop={{ xs: 5, md: 0 }} padding={{ md: 8, xs: 2 }}>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          borderRadius: "20px",
          padding: "3%",
          height: { xs: "50vh", sm: "60vh" }, // Responsive height
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        {/* Blur background */}
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: "blur(8px)",
            borderRadius: "20px",
            zIndex: 0,
          }}
        />
        {/* Text and Form content */}
        <Box
          ref={ref}
          sx={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center align content
            justifyContent: "center", // Center align vertically
            textAlign: "center", // Center text alignment
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mt: "20px",
              mb: 1,
              color: "lightgrey",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              fontSize: { xs: "20px", md: "40px" }, // Responsive font size
            }}
          >
            <b>Stay Updated with Our Newsletter</b>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              color: "lightgrey",
              fontSize: { xs: "15px", md: "18px" }, // Responsive font size
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            Subscribe to our newsletter and get the latest updates straight to
            your inbox.
          </Typography>

          {/* Email input and submit button */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <TextField
              variant="outlined"
              label="Enter your email"
              value={email}
              onChange={handleEmailChange}
              sx={{
                my: 2,
                width: { md: "300%", xs: "150%" },
                backgroundColor: "white",
                borderRadius: "5px",
                "& .MuiInputBase-root": {
                  fontSize: "16px",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "darkred",
                borderRadius: "10px",
                fontSize: "18px",
                "&:hover": {
                  backgroundColor: "darkblue",
                },
                padding: "10px 20px",
                color: "#fff",
              }}
              onClick={handleSubmit}
            >
              Subscribe Now
            </Button>
          </Box>

          {/* Snackbar for success message */}
          <Snackbar
            open={openSnackbar}
            onClose={() => setOpenSnackbar(false)}
            message="Thank you for subscribing!"
            autoHideDuration={4000}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NewsletterSignup;
